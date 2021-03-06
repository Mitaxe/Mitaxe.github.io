'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
 
gulp.task('sass', function () {
  return gulp.src('css/src/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('css/dist/'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('css/**/*.scss', ['sass']);
});

gulp.task('default', ['sass', 'sass:watch']);
