var gulp        = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('serve', function() {
	browserSync.init({
		server: 'public'
	});

	browserSync.watch('public/**/*.*').on('change', browserSync.reload);
});

gulp.task('dev', 
	gulp.series('serve')
);