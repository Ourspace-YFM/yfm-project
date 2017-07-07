"use strict";

var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');

gulp.task( 'default', ['sass:watch'] )

gulp.task('sass', function () {
  return gulp.src('./src/stylesheets/*.scss')
  .pipe(sass())
  .pipe(concat('custom.css')) // this is what was missing
  .pipe(gulp.dest('./src')); // output to theme root
  // .pipe(sass.sync().on('error', sass.logError))
});

gulp.task('sass:watch', function () {
  gulp.watch('./src/stylesheets/*.scss', ['sass']);
});
