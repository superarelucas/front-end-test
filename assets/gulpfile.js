var gulp = require('gulp')
	uglify = require('gulp-uglify'),
	sass = require('gulp-sass'),
	plumber = require('gulp-plumber'),
	livereload = require('gulp-livereload'),
	prefix = require('gulp-autoprefixer');

function errorLog(error) {
	console.error.bind(error);
	this.emit('end');
}


//Scripts tasks
//Uglifies
gulp.task('scripts', function() {
	gulp.src('js/**/*.js')
		.pipe(plumber())
		.pipe(uglify())
		.pipe(gulp.dest('dist/js'));
});

//Styles tasks
//Uglifies
gulp.task('styles', function() {
	gulp.src('scss/**/*.scss')
		.pipe(plumber())
		.pipe(sass({
			//outputStyle: 'compressed'
		}))
		.pipe(prefix('last 2 versions'))
		.pipe(gulp.dest('dist/css'))
		.pipe(livereload());
});

//Watch task
gulp.task('watch', function() {

	var serve = livereload();

	gulp.watch('js/*.js' , ['scripts']);
	gulp.watch('scss/**/*.scss' , ['styles']);
});

gulp.task('default', ['scripts', 'styles', 'watch']);