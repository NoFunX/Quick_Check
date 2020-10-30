"use strict";

const gulp = require ( 'gulp' );
const pug = require ( 'gulp-pug' );
const watch = require ('gulp-watch');
const sass = require ('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');

function Pug () {
  return gulp.src('app/pug/*.pug')
  .pipe(pug({
    pretty:true
  }))
  .pipe(gulp.dest('dist'))
  
};

function watcher() {
  gulp.watch('app/pug/**/*.pug', gulp.series('pug'));
  gulp.watch('app/styles/*scss', gulp.series('sass'));
};

function Sass() {
  return gulp.src('app/styles/*scss')
    .pipe(sass())
    .pipe(gulp.dest('dist/css'))
};
 
function Autoprefixer() {
  gulp.src('dist/css/*.css')
      .pipe(autoprefixer({
          cascade: false
      }))
      .pipe(gulp.dest('dist'))
    }


exports.pug = Pug;
exports.watcher = watcher;
exports.sass = Sass;
exports.autoprefixer = autoprefixer;