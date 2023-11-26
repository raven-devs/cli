// node src/module/progress/progress.js

const ProgressBar = require('progress');

const bar = new ProgressBar('processing [:bar] :percent :etas', {
  total: 100,
  width: 40,
  complete: '=',
  incomplete: ' ',
});
const timer = setInterval(() => {
  bar.tick();
  if (bar.complete) {
    clearInterval(timer);
  }
}, 100);
