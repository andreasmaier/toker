var gulp = require('gulp');

var requireDir = require('require-dir');
var taskListing = require('gulp-task-listing');

var dir = requireDir('./config/gulp');

gulp.task('default', taskListing);