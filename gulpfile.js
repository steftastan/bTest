'use strict';

var gulp    = require('gulp');
var jade    = require('gulp-jade');
var watch   = require('gulp-watch');
var stylus  = require('gulp-stylus');
var connect = require('gulp-connect');

gulp.task('jade', function () {
  var src = 'app/templates/**/*.jade';
  return gulp.src(src)
    .pipe(watch(src))
    .pipe(jade())
    .pipe(gulp.dest('dist'))
    .pipe(connect.reload());
});

gulp.task('stylus', function () {
  var src = 'app/css/**/app.styl';
  return gulp.src(src)
    .pipe(watch(src))
    .pipe(stylus())
    .pipe(gulp.dest('dist/css'))
    .pipe(connect.reload());
});

gulp.task('assets', function () {
  var src = ['app/**/index.jade', 'app/**/images/*', 'app/**/js/*',];
  return gulp.src(src)
    .pipe(watch(src))
    .pipe(gulp.dest('dist'))
    .pipe(connect.reload());
});

gulp.task('connect', function () {
  connect.server({
    root: 'dist',
    livereload: true
  });
});

gulp.task('default', ['connect', 'stylus', 'assets']);
