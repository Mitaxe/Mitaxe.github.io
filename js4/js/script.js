var startButton = document.querySelector('#start');
var stopButton = document.querySelector('#stop');
var splitButton = document.querySelector('#split');
var resetButton = document.querySelector('#reset');
var groupButton = document.querySelector('.btn-group');
var msIs;
var stopCount = 0;


var time = {
  h: 0,
  m: 0,
  s: 0,
  ms: 0
}

var startMs = Date.now();

function startTimer() {

  var sText = document.querySelector('#sec');
  var mText = document.querySelector('#m');
  var hText = document.querySelector('#h');
  var msText = document.querySelector('#ms');

  stopButton.style.display = 'block';
  startButton.style.display = 'none';


  msId = setInterval(function () {
    var elapsedMs = Date.now() - startMs;

    if (elapsedMs > 1000) {
      elapsedMs = 999;
      time.s++;
      startMs = Date.now();
    }

    if (time.s > 59) {
      time.s = 0;
      time.m++;
    }

    if (time.m > 59) {
      time.m = 0;
      time.h++;
    }


    if (elapsedMs < 100) {
      msText.innerHTML = '0' + elapsedMs;
    } else msText.innerHTML = elapsedMs;

    if (time.s < 10) {
      sText.innerHTML = '0' + time.s + ':';
    } else {
      sText.innerHTML = time.s + ':';
    }

    if (time.m < 10) {
      mText.innerHTML = '0' + time.m + ':';
    } else {
      mText.innerHTML = time.m + ':';
    }

    if (time.h < 10) {
      hText.innerHTML = '0' + time.h + ':';
    } else {
      hText.innerHTML = time.h + ':';

    }

  }, 43);

  resetButton.addEventListener('click', function () {
    clearInterval(msId);

    stopCount = 0;

    hText.innerHTML = '00:';
    mText.innerHTML = '00:';
    sText.innerHTML = '00:';
    msText.innerHTML = '000';

    time.h = 0;
    time.m = 0;
    time.s = 0;

    stopButton.style.display = 'none';
    startButton.style.display = 'block';

  });
}

function startButtonHandler(e) {
  startTimer();
}

function stopButtonHandler() {
  stopCount++;
  var ms = document.getElementById('ms');

  stopButton.style.display = 'none';
  startButton.style.display = 'block';
  clearInterval(msId);

}




startButton.addEventListener('click', startButtonHandler);
stopButton.addEventListener('click', stopButtonHandler);