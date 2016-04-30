'use strict';

var util = require('util');

module.exports = {
  src: './src/images/icons/*.{png,gif,jpg}',
  destImage: './cordova/www/sprite.png',
  destCSS: './src/scss/sprite.scss',
  imgPath: 'sprite.png',
  padding: 2,
  algorithm: 'top-down',
  algorithmOpts: { sort: false },
  cssOpts: {
    cssClass: function (item) {
      return util.format('.ic-%s:before', item.name);
    }
  }
};