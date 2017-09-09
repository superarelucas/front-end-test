const gulp = require('gulp'),
    pug = require('gulp-pug'),
    sass = require('gulp-sass'),
    sassGlob = require('gulp-sass-glob'),
    autoprefixer = require('gulp-autoprefixer'),
    wait = require('gulp-wait'),
    imagemin = require('gulp-imagemin'),
    uglify = require('gulp-uglify'),
    babel = require('gulp-babel'),
    rename = require('gulp-rename'),
    cssmin = require('gulp-cssmin'),
    concat = require('gulp-concat'),
    webserver = require('gulp-webserver');


/////////
// PUG //
/////////
gulp.task('pug', function() {
    return gulp.src('./src/pug/*.pug')
        .pipe(pug({
            pretty: false,
        }))
        .pipe(gulp.dest('./dist/'));
});
gulp.task('pug-watch', ['pug'], function() {
    gulp.watch('./src/pug/**/*.pug', ['pug'])
});


//////////
// SASS //
//////////
gulp.task('sass', function() {
    return gulp.src('./src/sass/main.scss')
        .pipe(wait(500))
        .pipe(sassGlob())
        .pipe(sass())
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 4 versions', '> 5%', 'Firefox ESR']
        }))
        .pipe(cssmin())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('./dist/css/'));
});
gulp.task('sass-watch', ['sass'], function() {
    gulp.watch('./src/sass/**/*.scss', ['sass'])
});


////////
// JS //
////////
gulp.task('js', function() {
    gulp.src(['./src/js/modules/*.js', './src/js/main.js'])
        .pipe(babel({
            presets: ['env']
        }))
        .pipe(uglify())
        .pipe(concat('main.js'))
        .pipe(rename('main.min.js'))
        .pipe(gulp.dest('./dist/js/'));
});
gulp.task('js-watch', ['js'], function() {
    gulp.watch('./src/js/**/*.js', ['js'])
});


////////////
// IMAGES //
////////////
gulp.task('img', function() {
    gulp.src(['./src/images/*.jpg', './src/images/*.png', './src/images/*.svg'])
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/images/'));
});


////////////
// SERVER //
////////////
gulp.task('server', function () {
    return gulp.src('./')
        .pipe(webserver({
            open: 'http://localhost:8000/dist/index.html'
        }));
});


// Default task
gulp.task('default', ['pug-watch', 'sass-watch', 'js-watch', 'img', 'server']);
