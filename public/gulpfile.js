'use strict'

const gulp = require('gulp');
const sass = require('gulp-sass');
const minify = require('gulp-minify-css');

gulp.task('default', ['watch', 'sass']);

gulp.task('sass', (done)=>{
  gulp.src('./sass/*.scss')
  .pipe(sass())
  .on('error', sass.logError)
  .pipe(minify())
  .pipe(gulp.dest('./public'))
  .on('end', done) 
})

gulp.task('watch', () =>{
  gulp.watch('./sass/*.scss', ['sass'])
})
