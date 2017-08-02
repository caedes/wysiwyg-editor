'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const imageOptim = require('gulp-imageoptim');

gulp.task('images', function() {
  return gulp
    .src('img/**/*')
    .pipe(imageOptim.optimize())
    .pipe(gulp.dest('img'));
});

gulp.task('sass', function() {
  gulp
    .src('stylesheets/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('stylesheets/'));
});

gulp.task('default', function() {
  gulp.watch('stylesheets/*.scss', ['sass']);
});
