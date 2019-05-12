'use strict';
 
const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');

const watch = require('gulp-watch');



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



    ///////////////////////
    /// Minify css
    //////////////////////
    gulp.task('minify-css', () => {
        return gulp.src('../css/prefix/*.css')
          .pipe(cleanCSS({compatibility: 'ie8'}))
          .pipe(gulp.dest('../css/minify'));
      });

// Watch

gulp.task('watch', function(){
  gulp.watch('../sass/*.scss', gulp.series('sass'));
  gulp.watch('../css/*.css', gulp.series('prefix'));
  gulp.watch('../css/*.css', gulp.series('minify-css'));

});



gulp.task('develop', gulp.series('sass', 'prefix', 'minify-css', 'watch'));
