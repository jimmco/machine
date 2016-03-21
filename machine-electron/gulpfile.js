'use strict';

var gulp = require('gulp');
var electron_connect = require('electron-connect').server.create();
var zip = require('gulp-vinyl-zip');
var electron = require('gulp-atom-electron');
var symdest = require('gulp-symdest');

gulp.task('serve', function () {

  // Start browser process
  electron_connect.start();

  // Restart browser process
  gulp.watch('app.js', electron_connect.restart);

  // Reload renderer process
  gulp.watch(['index.js', 'index.html','machine.js','index.css'], electron.reload);
});

gulp.task('default', function() {
  return gulp.src('src/**')
    .pipe(electron({ version: '0.34.1', platform: 'darwin' }))
    .pipe(symdest('app'));
});


