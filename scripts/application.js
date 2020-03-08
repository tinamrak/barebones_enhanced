(function($, Drupal) {

  'use strict';
  
  /*----------------------------------------
   Stop preload animations
   https://css-tricks.com/transitions-only-after-page-load/
  ----------------------------------------*/
  Drupal.behaviors.removePreload = {
    attach: function (context, settings) {
      $(window, context).once('removePreload').on('load', function () {
        $('body').removeClass('preload');
      });
    }
  };

  /*----------------------------------------
   Example
  ----------------------------------------*/
  Drupal.behaviors.example = {
    attach: function(context, settings) {
      // JS goes here
    }
  };

})(jQuery, Drupal);
