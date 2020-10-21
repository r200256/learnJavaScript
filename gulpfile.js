// var gulp = require('gulp');
// gulp.task('default', done => {
//     // code...
//     done();
//   });

// var gulp = require('gulp');

// gulp.task('message', function() {
//   console.log("HTTP Server Started");
// });

const gulp = require('gulp');
const babel= require('gulp-babel');
const eslint=require('gulp-eslint');
gulp.task('default', function(){
    // Запуск ESlint
    gulp.src(["es6/88/8.js","public/es6/**/*.js"])
        .pipe(eslint())
        .pipe(eslint.format())

    // Исходный код Node
    gulp.src("es6/**/*.js")
        .pipe(babel())
        .pipe(gulp.dest("dist"));
    
    // Исходный код для браузера
    gulp.src("public/es6/**/*.js")
        .pipe(babel())
        .pipe(gulp.dest("public/dist"))
    done();
});