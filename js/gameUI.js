import { counterFunc } from "./counterFunctions.js";
import { outputNumFunc } from "./outputNumFunctions.js";
import { generateRandom } from "./generateRandomNum.js";

export const gameUI = (container) => {
  let randomNumber = generateRandom(1, 34);

  container.innerHTML = "";

  let gameButtonsSection = document.createElement("section");
  gameButtonsSection.classList.add("game-buttons");

  container.append(gameButtonsSection);

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

  outputNumFunc(increment, decrement, outputNum, randomNumber, container);
  counterFunc(increment, decrement, outputNum);
};
