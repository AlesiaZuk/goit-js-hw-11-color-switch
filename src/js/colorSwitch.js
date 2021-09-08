import refs from "./refs";
import colors from "./colors";

const { body, buttonStart, buttonStop } = refs

let timerId = null;

buttonStart.addEventListener("click", switchColorStart)
buttonStop.addEventListener("click", switchColorStop)

function randomIntegerFromInterval (min, max){
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function switchColorStart() {
    timerId = setInterval(() => {
    let color = randomIntegerFromInterval(0, colors.length - 1)    
    body.style.background = colors[color]
  }, 1000);
};

function switchColorStop() {
    clearInterval(timerId);
 }

