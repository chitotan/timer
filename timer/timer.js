const hoursInput = document.getElementById("hours");
const minutesInput = document.getElementById("minutes");
const secondsInput = document.getElementById("seconds");
const startButton = document.getElementById("start-button");
const stopButton = document.getElementById("stop-button");
const timerEl = document.getElementById("timer");
const audio = document.getElementById('sound');
function insert1h() { //1時間ボタン
  // 時間指定
  var inputElement = document.getElementById('hours');
  inputElement.value = '1';
  // 分指定
  var inputElement = document.getElementById('minutes');
  inputElement.value = '0';
  // 秒指定
  var inputElement = document.getElementById('seconds');
  inputElement.value = '0';
}

function insert30m() { //30分ボタン
  // 時間指定
  var inputElement = document.getElementById('hours');
  inputElement.value = '0';
  // 分指定
  var inputElement = document.getElementById('minutes');
  inputElement.value = '30';
  // 秒指定
  var inputElement = document.getElementById('seconds');
  inputElement.value = '0';
}

function insert5m() { //5分ボタン
  // 時間指定
  var inputElement = document.getElementById('hours');
  inputElement.value = '0';
  // 分指定
  var inputElement = document.getElementById('minutes');
  inputElement.value = '5';
  // 秒指定
  var inputElement = document.getElementById('seconds');
  inputElement.value = '0';
}

function insert3m() { //3分ボタン
  // 時間指定
  var inputElement = document.getElementById('hours');
  inputElement.value = '0';
  // 分指定
  var inputElement = document.getElementById('minutes');
  inputElement.value = '3';
  // 秒指定
  var inputElement = document.getElementById('seconds');
  inputElement.value = '0';
}

let timer;

function startTimer() {
  clearInterval(timer);
  const hours = parseInt(hoursInput.value);
  const minutes = parseInt(minutesInput.value);
  const seconds = parseInt(secondsInput.value);

  let timeLeft = hours * 3600 + minutes * 60 + seconds;

  timer = setInterval(function() {
    const hours = Math.floor(timeLeft / 3600);
    const minutes = Math.floor((timeLeft % 3600) / 60);
    const seconds = timeLeft % 60;

    // 残り時間を表示する
timerEl.innerHTML =
(hours < 10 ? "0" + hours : hours) +
":" +
(minutes < 10 ? "0" + minutes : minutes) +
":" +
(seconds < 10 ? "0" + seconds : seconds);
if (timeLeft === 0) {
    audio.play();
    clearInterval(timer);
    alert("終了!!");
  }
  
  timeLeft--;
}, 1000);
}

function stopTimer() {
clearInterval(timer);
}

startButton.addEventListener("click", startTimer);
stopButton.addEventListener("click", stopTimer);