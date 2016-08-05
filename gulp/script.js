'use strict';

var gulp = require('gulp');
var inject = require('gulp-inject');
var angularFilesort = require('gulp-angular-filesort');
var config = require('./config');

//Inject the app files into html.
gulp.task('scripts:dev',  function () {

  var injectOptions = {
    name: 'app',
    addSuffix: '?v=' + new Date().getTime()
  };

  var scripts = gulp.src(config.appFiles('js', true)).pipe(angularFilesort());
  return gulp.src(config.paths.view)
    .pipe(inject(scripts, injectOptions))
    .pipe(gulp.dest(config.paths.root));
});
