var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var watch = require('gulp-watch');

console.log('Gulpfile is loaded.  Ready to run tasks.');

// global settings for gulp
var settings = {
  scriptsFolder: 'scripts/',
  distFolder: 'dist/'
};

// watch for changes
watch([settings.scriptsFolder + 'app/*.js'], function() {
  console.log('script change detected - rebundling')
  gulp.start('default'); // run default task when changes occure
});

// default gulp task
gulp.task('default', function() {
  return gulp.src([settings.scriptsFolder + 'lib/jquery.js', settings.scriptsFolder + 'app/*.js'])
    .pipe(concat('distribution-app.js'))
    .pipe(uglify()) // comment out uglify for debugging OR development
    .pipe(gulp.dest(settings.distFolder));
});
