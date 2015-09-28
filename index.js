var recorder = require('x-recorder');
console.log(recorder);
var capture = new recorder.XCapture({output: 'ffmpeg.mov' });
capture.start(function() {
  console.log('STARTED');
});
setTimeout(function() {
  capture.stop(function() {
    console.log('STOPPED');
  }), 10000
);
