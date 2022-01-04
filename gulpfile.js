'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function buildStyles() {
    return gulp.src('./sass/main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./assets/css'));
}

function defaultTask() {

    return buildStyles();
}

exports.default = defaultTask;
