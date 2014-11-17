var gulp = require('gulp');
var protractor = require("gulp-protractor").protractor;
var webdriver_update = require("gulp-protractor").webdriver_update;

gulp.task('webdriver_update', webdriver_update);

gulp.task('protractor', ['webdriver_update'], function () {
    gulp.src(["./src/test/js/feature/specs/**/*Spec.js"])
        .pipe(protractor({
            configFile: "./src/test/js/feature/protractor-config.js",
            args: ['--baseUrl', 'http://127.0.0.1:8000']
        }))
        .on('error', function(e) { throw e });
});
