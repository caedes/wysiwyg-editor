const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('sass', function() {
  gulp.src('stylesheets/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('stylesheets/'));
});

gulp.task('default', function() {
  gulp.watch('stylesheets/*.scss', ['sass']);
});
