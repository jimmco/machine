'use strict';

var gulp = require('gulp');
var electron_connect = require('electron-connect').server.create();
var electron = require('gulp-atom-electron');

gulp.task('serve', function () {

  // Start browser process
  electron_connect.start();

  // Restart browser process
  gulp.watch('app.js', electron_connect.restart);

  // Reload renderer process
  gulp.watch(['index.js', 'index.html','machine.js','index.css'], electron.reload);
});



