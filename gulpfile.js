'use strict';

var gulp     = require('gulp');
var jade     = require('gulp-jade');
var watch    = require('gulp-watch');
var stylus   = require('gulp-stylus');
var connect  = require('gulp-connect');
var minify   = require('gulp-minify');
var rename   = require("gulp-rename");

gulp.task('jade', function () {
  var src = 'app/templates/**/*.jade';
  return gulp.src(src)
    .pipe(watch(src))
    .pipe(jade({
      pretty:true
    }))
    .pipe(gulp.dest('dist'))
    .pipe(connect.reload());
});

gulp.task('css', function () {
  var src = 'app/css/**/style.styl';
  return gulp.src(src)
    .pipe(watch(src))
    .pipe(stylus())
    .pipe(gulp.dest('dist/css'))
    .pipe(connect.reload());
});

gulp.task('minify-css', function () {
  return gulp.src('app/css/**/style.styl')
    .pipe(stylus({
      compress: true
    }))

    .pipe(rename("css/style.min.css"))
    .pipe(gulp.dest("dist"));

});

gulp.task('assets', function () {
  var src = ['app/**/images/*'];
  return gulp.src(src)
    .pipe(watch(src))
    .pipe(gulp.dest('dist'))
    .pipe(connect.reload());
});

gulp.task('compress', function() {
  gulp.src('app/js/*.js')
    .pipe(minify({
        ext:{
            src:'.js',
            min:'.min.js'
        }
    }))
    .pipe(gulp.dest('dist/js/'))
});

gulp.task('connect', function () {
  connect.server({
    root: 'dist',
    livereload: true
  });
});

gulp.task('default', ['jade', 'connect', 'css', 'minify-css', 'assets', 'minify-css', 'compress']);
