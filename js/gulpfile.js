'use strict';
 
const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const watchSass = require('gulp-watch-sass');


///////
// TEST
///////
gulp.task('message', function(){
    return console.log(123);
});

/////////////////////
//SASS compiler
////////////////////

gulp.task('sass', function () {
  return gulp.src('../sass/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('../css'));
});


// SASS -watch



///////////////////
// PREFİX task
///////////////////

gulp.task('prefix', () =>
    gulp.src('../css/main.css')
        .pipe(autoprefixer({
            browsers: ['last 5 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('../css/prefix'))
);
