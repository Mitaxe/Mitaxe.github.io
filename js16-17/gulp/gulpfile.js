var gulp = require('gulp');
var concat = require('gulp-concat');
var concatCss = require('gulp-concat-css');
var cleancss = require('gulp-cleancss');
var jsmin = require('gulp-jsmin');
var rename = require("gulp-rename");



gulp.task('default', ['concat', 'concat-css', 'styles:dist', 'minjs']);

gulp.task('concat', function () {
  return gulp.src('js/src/*.js')
    .pipe(concat('script.main.js'))
    .pipe(gulp.dest('js/dist/'));
});

gulp.task('concat-css', function () {
  return gulp.src('css/src/*.css')
    .pipe(concatCss("style.min.css"))
    .pipe(gulp.dest('css/dist/'));
});

gulp.task('styles:dist', function () {
  gulp.src('css/dist/*.css')
    .pipe(cleancss({
      keepBreaks: false
    }))

    .pipe(gulp.dest('css/'));
});


gulp.task('minjs', function () {
	gulp.src('js/dist/*.js')
		.pipe(jsmin())
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest('js/dist'));
});