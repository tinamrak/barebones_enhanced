# An enhanced starter theme for Drupal 8

This is an improved version of the skeleton theme for Drupal 8 - [Bare Bones](https://github.com/tinamrak/barebones).

Besides the most essential files, it also includes Font Awesome and Bootstrap libraries.

You don't have to worry about creating all the files from scratch, just copy this to your *themes* directory and start with development.

CSS and JS source files are located inside the *sass* and *scripts* directories. These are compiled into the *assets* folder, which also includes the *images* and *fonts* directories where you should put all your theme images and fonts.

You can use rem units for font sizes: *1rem = 10px*, *1.8rem = 18px*, etc.

## Requirements

- [Drupal 8](https://www.drupal.org/)
- [Drush](https://www.drush.org/)
- [git](https://git-scm.com/)
- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

## Usage

Clone this repository  
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
cd .npm
npm install
npm audit fix
gulp
```

Set Bare Bones Enhanced as your default theme
```
drush config-set system.theme default barebones_enhanced -y
```

------------

**Did you find this useful?** [Buy me a coffee.](https://www.buymeacoffee.com/tinamrak "Buy Tina Mrak a coffee.")

**Do you have a web development problem you cannot seem to be able to solve?** [Reach out to me on Twitter.](https://twitter.com/TinaMrak "Follow me on Twitter")

------------
