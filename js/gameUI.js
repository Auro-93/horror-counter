import { counterFunc } from "./counterFunctions.js";
import { outputNumFunc } from "./outputNumFunctions.js";

export const gameUI = (container) => {
  container.innerHTML = "";

  let counterGameRain = document.createElement("section");
  counterGameRain.classList.add("counter-game-rain");

  let gameButtonsSection = document.createElement("section");
  gameButtonsSection.classList.add("game-buttons");

  container.append(counterGameRain, gameButtonsSection);

  let decrement = document.createElement("button");
  let increment = document.createElement("button");
  let outputNum = document.createElement("div");

  outputNum.type = "text";

  decrement.classList.add("button-decrement");
  increment.classList.add("button-increment");
  outputNum.classList.add("output-num");

  decrement.innerHTML = "-";
  increment.innerHTML = "+";
  outputNum.textContent = "0";

  decrement.disabled = true;

  gameButtonsSection.append(decrement, outputNum, increment);

  outputNumFunc(increment, decrement, outputNum, counterGameRain);
  counterFunc(increment, decrement, outputNum);
};