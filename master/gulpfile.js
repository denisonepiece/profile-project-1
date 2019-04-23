var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function() {
    return gulp.src("app/scss/*.scss")
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 15 versions'],
            cascade: true
        }))
        .pipe(gulp.dest("app/css"))
        .pipe(browserSync.stream());
});

gulp.task('serve', gulp.series('sass', function() {

    browserSync.init({
        server: "app/"
    });

    gulp.watch("app/scss/*.scss", gulp.series('sass'));
    gulp.watch("app/*.html").on('change', browserSync.reload);
}));

gulp.task('autoprefixer', () =>
    gulp.src('app/css/main.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('css'))
);


gulp.task('build', function(){
    var buildHtml = gulp.src('app/*.html')
        .pipe(gulp.dest('dist'))
    var buildJs = gulp.src('app/js/**/*.js')
        .pipe(gulp.dest('dist/js'))
    var buildsFonts = gulp.src('app/fonts/**/*')
        .pipe(gulp.dest('dist/fonts'))
    var buildCss = gulp.src(['app/css/**/*.css'])
        .pipe(gulp.dest('dist/css'))
    var dropImages = gulp.src('app/img/**/*')
        .pipe(gulp.dest('dist/img'))
});



gulp.task('default', gulp.series('serve'));
