/* eslint-disable no-unused-vars */
const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const concat = require('gulp-concat');

gulp.task('sass', function() {
  return gulp.src('app/scss/*.scss')
      .pipe(sass({
        includePaths: require('node-normalize-scss').includePaths,
      }))
      .pipe(autoprefixer({
        browsers: ['last 15 versions'],
        cascade: true,
      }))
      .pipe(gulp.dest('app/css'))
      .pipe(browserSync.stream());
});

gulp.task('js', function() {
  return gulp.src('app/js/**/*.js')
      .pipe(concat('main.js'))
      .pipe(gulp.dest('app'));
});

gulp.task('autoprefixer', () =>
  gulp.src('app/css/main.css')
      .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false,
      }))
      .pipe(gulp.dest('css'))
);

gulp.task('serve', gulp.series(['sass', 'js'], function() {
  browserSync.init({
    server: '',
  });

  gulp.watch('app/scss/*.scss', gulp.series('sass'));
  gulp.watch('app/js/*.js', gulp.series('js'));
  gulp.watch('*.html').on('change', browserSync.reload);
}));

gulp.task('build', function() {
  const buildHtml = gulp.src('app/*.html')
      .pipe(gulp.dest('dist'));
  const buildJs = gulp.src('app/js/**/*.js')
      .pipe(gulp.dest('dist/js'));
  const buildsFonts = gulp.src('app/fonts/**/*')
      .pipe(gulp.dest('dist/fonts'));
  const buildCss = gulp.src(['app/css/**/*.css'])
      .pipe(gulp.dest('dist/css'));
  const dropImages = gulp.src('app/img/**/*')
      .pipe(gulp.dest('dist/img'));
});

gulp.task('default', gulp.series('serve'));
