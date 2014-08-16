
'use strict';

var gulp = require('gulp');
var mocha = require('gulp-mocha');
var gutil = require('gulp-util');
var watch = require('gulp-watch');

gulp.task('mocha', function () {
  return gulp.src(['test/*.spec.js'], { read: false })
            .pipe(mocha({ reporter: 'spec' }))
            .on('error', gutil.log);
});

gulp.task('watch-mocha', function () {
  gulp.watch(['./**.js', 'test/*.spec.js'], ['mocha']);
});

gulp.task('dev', function () {
  gulp.start('watch-coffee', 'watch-mocha');
});