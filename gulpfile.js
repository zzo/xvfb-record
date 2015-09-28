var gulp = require('gulp');
var Server = require('karma').Server;
var recorder = require('x-recorder');
var capture = new recorder.XCapture({output: 'ffmpeg.mov' });

gulp.task('start_record', function (done) {
  capture.start(done);
});

gulp.task('stop_record', function (done) {
  capture.stop(done);
});

gulp.task('test', function (done) {
  new Server({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, done).start();
});

gulp.task('record', [ 'start_record', 'test', 'stop_record' ]);
gulp.task('default', ['test']);
