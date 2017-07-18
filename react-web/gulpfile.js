"use strict";

var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');

gulp.task( 'default', ['sass:watch'] )

gulp.task('sass', function () {
  return gulp.src('./src/stylesheets/*.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(concat('custom.css'))
  .pipe(gulp.dest('./src'));
});

gulp.task('sass:watch', function () {
   gulp.start('sass')
  gulp.watch('./src/stylesheets/**/*.scss', ['sass']);
});
