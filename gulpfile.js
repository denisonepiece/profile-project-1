/* eslint-disable no-unused-vars */
const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');
const concat = require('gulp-concat');

gulp.task('sass', function() {
  return gulp.src('app/sass/*.sass')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('app/css'))
      .pipe(browserSync.stream());
});

gulp.task('js', function() {
  return gulp.src('app/js/**/*.js')
      .pipe(concat('main.js'))
      .pipe(gulp.dest('app'));
});


gulp.task('serve', function() {
  browserSync.init({
    server: './',
  });

  gulp.watch('app/sass/*.sass', gulp.series('sass'));
  gulp.watch(['*.html', 'app/js/**/*.js']).on('change', browserSync.reload);
});

gulp.task('default', gulp.series('serve'));
