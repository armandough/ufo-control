'use strict';

const gulp = require('gulp');

function files() {
    return gulp.src('src/**').pipe(gulp.dest('./dist'));
}

gulp.task('files', files);