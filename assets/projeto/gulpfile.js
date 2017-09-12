const gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    pug = require('gulp-pug'),
    pugPHPFilter = require('pug-php-filter'),
    rename = require ('gulp-rename');


/////////
// PUG //
/////////
gulp.task('pug', function() {
    return gulp.src('./pug/*.pug')
        .pipe(pug({
            pretty: true,
            filters: {
                php: pugPHPFilter
            }
        }))
        .pipe(rename({
            extname: '.php'
        }))
        .pipe(gulp.dest('./'));
});
gulp.task('pug-watch', ['pug'], function() {
    gulp.watch('./pug/**/*.pug', ['pug'])
});

//////////
// SASS //
//////////
gulp.task('sass', function() {
    return gulp.src('./sass/*.scss')
        .pipe(sass())
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 4 versions', '> 5%', 'Firefox ESR']
        }))
        .pipe(gulp.dest('./css'));
});
gulp.task('sass-watch', ['sass'], function() {
    gulp.watch('./sass/**/*.scss', ['sass'])
});

/* Default task */
gulp.task('default', ['pug-watch', 'sass-watch']);
