'use strict';

const gulp       = require('gulp'),
      sass       = require('gulp-sass'),
      sourcemaps = require('gulp-sourcemaps'),
      minifyCSS  = require('gulp-csso');

gulp.task('sass', function () {
  return gulp.src('sass/main/*.scss')
    .pipe(sourcemaps.init())
      .pipe(sass())
      .pipe(minifyCSS())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist/css/main'))
});

gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});
