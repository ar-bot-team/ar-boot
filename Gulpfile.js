// Include gulp
var gulp = require('gulp');

// Include Our Plugins
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var mocha = require('gulp-mocha');

// Lint Task
gulp.task('lint', function () {
    return gulp.src([
        './**/bin/*.js', './**/server/**/*.js', './**/test/*.js'
    ])
        .pipe(jshint())
        .pipe(jshint.reporter(stylish))
        .pipe(jshint.reporter('fail'));
});

gulp.task('test', function () {
    return gulp.src([
        './arbot/test/*.js', './arbot-time/test/*.js', './arbot-weather/test/*.js'
    ], { read: false })
        .pipe(mocha({
            reporter: 'spec'
        }));
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('js/*.js', ['lint', 'scripts']);
});

// Default Task
gulp.task('default', ['lint', 'watch']);