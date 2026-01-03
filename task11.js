let seconds = 0;
let minutes = 0;
let timer = null;

function start() {
  if (timer !== null) return;

  timer = setInterval(() => {
    seconds++;

    if (seconds === 60) {
      seconds = 0;
      minutes++;
    }

    document.getElementById("display").innerText =
      (minutes < 10 ? "0" : "") + minutes + ":" +
      (seconds < 10 ? "0" : "") + seconds;
  }, 1000);
}

function stop() {
  clearInterval(timer);
  timer = null;
}

function reset() {
  stop();
  seconds = 0;
  minutes = 0;
  document.getElementById("display").innerText = "00:00";
}