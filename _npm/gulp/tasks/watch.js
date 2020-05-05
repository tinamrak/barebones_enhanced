/**
 * Watch for file changes and run tasks.
 *
 * Tasks:
 * - Puts to destination
 * - Success/error message
 */

'use strict';

module.exports = function (gulp, $, config, messages, fs) {
  gulp.task('watch', function () {

    if (config.browserSync.enableProxy) {
      $.browserSync.init({
        proxy: config.browserSync.proxy
      });

      gulp.watch(config.sass.src, gulp.series('styles'))
        .on("change", $.browserSync.reload);

      gulp.watch(config.javascript.src, gulp.series('scripts'))
        .on("change", $.browserSync.reload);

      gulp.watch(config.twig.src)
        .on("change", $.browserSync.reload);
    }

    else {
      gulp.watch(config.sass.src, gulp.series('styles'));
      gulp.watch(config.javascript.src, gulp.series('scripts'));
    }
  });
};
