'use strict';

var pathCfg = require('../../../package.json').path;
var path = require('path');

module.exports = function(gulp, plugins, webpackConfig){
  return function(){
    gulp.src(webpackConfig.release._entryArray)
         .pipe(plugins.plumber())
         .pipe(plugins.webpack(webpackConfig.release))
         .pipe(gulp.dest(path.join(pathCfg.dist)));
  };
};
