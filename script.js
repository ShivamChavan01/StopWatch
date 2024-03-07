const display = document.getElementById("watch");
let time = null;
let startTime = 0;
let elpasedTime = 0;
let isRunning = false;

function start() {
  if (!isRunning) {
    startTime = Date.now() - elpasedTime;
    time = setInterval(update, 10);
    isRunning = true;
  }
}

function stop() {
  if (isRunning) {
    clearInterval(time);
    elpasedTime = Date.now() - startTime;
    isRunning = false;
  }
}
function reset() {
  clearInterval(time);
  startTime = 0;
  elpasedTime = 0;
  isRunning = false;
  display.textContent = "00h:00m:00s";
}

function update() {
  const currentTime = Date.now();
  elpasedTime = currentTime - startTime;

  let hour = Math.floor(elpasedTime / (1000 * 60 * 60));

  let min = Math.floor((elpasedTime / (1000 * 60)) % 60);
  let sec = Math.floor((elpasedTime / 1000) % 60);
  let mili = Math.floor((elpasedTime % 1000) / 10);

  hour = String(hour).padStart(2, 0);
  min = String(min).padStart(2, 0);
  sec = String(sec).padStart(2, 0);
  mili = String(mili).padStart(2, 0);

  display.textContent = `${hour}h:${min}m:${sec}s:${mili}`;
}
