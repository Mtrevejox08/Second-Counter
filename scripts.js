const buttonstart = document.querySelector("#bstart");
const buttonstop = document.querySelector("#bstop");
const mainNumber = document.querySelector("#number");

buttonstart.addEventListener("click", start);
buttonstop.addEventListener("click", stop);

let number = 0;
let stopwatch;

function start() {
  stopwatch = setInterval(function () {
    number++;
    mainNumber.innerHTML = number;
  }, 1000);
}

function stop() {
  clearInterval(stopwatch);
}
