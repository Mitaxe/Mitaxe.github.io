'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var concatCss = require('gulp-concat-css');
var cssmin = require('gulp-cssmin');
var rename = require("gulp-rename");
var concat = require('gulp-concat');
var jsmin = require('gulp-jsmin');



 
gulp.task('sass', function () {
  return gulp.src('./styles/src/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('styles'));
});
 
gulp.task('watch', function () {
  gulp.watch('./styles/src/*.scss', ['sass']);
});

gulp.task('concat-css', function () {
  return gulp.src(['styles/src/*.css', 'styles/coin-slider-styles.css', 'styles/*.css'])
    .pipe(concatCss("style.css"))
    .pipe(gulp.dest('styles/'));
});

gulp.task('min-css', function () {
	gulp.src('styles/style.css')
		.pipe(cssmin())
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest('styles'));
});

gulp.task('min-js', function () {
	gulp.src('src/**/*.js')
		.pipe(jsmin())
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest('dist'));
});

gulp.task('concat-js', function() {
  return gulp.src(['js/jquery-2.2.3.min.js', 'js/coin-slider.min.js', 'js/script.js'])
    .pipe(concat('js.main.js'))
    .pipe(gulp.dest('js/dist/'));
});

gulp.task('min-js', function () {
	gulp.src('js/dist/*.js')
		.pipe(jsmin())
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest('js/dist'));
});


gulp.task('default', ['sass', 'watch']);
