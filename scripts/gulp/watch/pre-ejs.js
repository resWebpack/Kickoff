'use strict';

var pathCfg = require('../../../package.json').path;
var ejsGlob = require('../globs.js').ejsGlob;

module.exports = function(gulp, plugins){
  return function(){
    return gulp.src(ejsGlob)
                .pipe(plugins.plumber())
                .pipe(plugins.ejs())
                .pipe(gulp.dest(pathCfg.dist));
  };

};
