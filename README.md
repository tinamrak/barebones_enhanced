# An enhanced starter theme for Drupal 8

This is an improved version of the skeleton theme for Drupal 8 - [Bare Bones](https://github.com/tinamrak/barebones).

Besides the most essential files it also includes some external libraries and a couple of performance improvements.

You don't have to worry about creating all the files from scratch, just copy this to your *themes* directory and start with development.

CSS and JS source files are located inside the *sass* and *scripts* directories. These are compiled into the *assets* folder, which also includes the *images* and *fonts* directories where you should put all your theme images and fonts.

You can use rem units for font sizes: *1rem = 10px*, *1.8rem = 18px*, etc.

## Enhancements
- External CSS libraries
  - [Font Awesome](https://fontawesome.com/)
  - [Bootstrap](https://getbootstrap.com/)
  - [Foundation](https://get.foundation/)
  
- Stop preload animations ([more info](https://css-tricks.com/transitions-only-after-page-load/))
- Body class *.path-error* for error pages (403, 404)


## Requirements
- [Drupal 8](https://www.drupal.org/)
- [Drush](https://www.drush.org/)
- [git](https://git-scm.com/)
- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

## Usage

Download or clone this theme in to your themes directory 
```
git clone git@github.com:tinamrak/barebones_enhanced.git
```

Remove git directory
```
cd barebones_enhanced
rm -R .git;
```

Install npm packages and run gulp
```
cd _npm
npm install
npm audit fix
gulp
```

Set Bare Bones Enhanced as your default theme
```
drush config-set system.theme default barebones_enhanced -y
```

Once this theme is enabled check out the sass/base/_libraries.scss for further instructions on how to enable each external library.

------------

**Did you find this useful?** [Buy me a coffee.](https://www.buymeacoffee.com/tinamrak "Buy Tina Mrak a coffee.")

**Do you have a web development problem you cannot seem to be able to solve?** [Reach out to me on Twitter.](https://twitter.com/TinaMrak "Follow me on Twitter")

------------
