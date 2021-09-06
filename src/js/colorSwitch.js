import refs from "./refs";
import colors from "./colors";

const { body, buttonStart, buttonStop } = refs

buttonStart.addEventListener("click", switchColorStart)
buttonStop.addEventListener("click", switchColorStop)

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
let color = randomIntegerFromInterval(0, colors.length - 1)
console.log(color)
console.log(colors[color])

function switchColorStart() {
    // body.setAttribute("background-color", colors[color])
    body.style.background = colors[color]
 }

function switchColorStop() {
   
 }

