'use strict';

var pathCfg       = require('../../../package.json').path;
var lessGlob      = require('../globs.js').lessGlob;
var path          = require('path');
var lessOutputDir = path.join(pathCfg.dist);

module.exports = function(gulp, plugins) {

  return function() {

    return gulp.src(lessGlob)
               .pipe(plugins.plumber())
               .pipe( plugins.less({ plugins: [plugins.autoprefix, plugins.cleancss] }))
               .pipe(plugins.rev())
               .pipe(gulp.dest(lessOutputDir));
  };

};

