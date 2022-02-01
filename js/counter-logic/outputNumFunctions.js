import { rainEffect } from "../animations/rainEffect.js";
import { gameOverUI } from "../dynamic-UI/gameOverUI.js";
import { winUI } from "../dynamic-UI/winUI.js";

export const outputNumFunc = (
  increment,
  decrement,
  output,
  random,
  container
) => {
  const winOrLose = (random, value, container) => {
    //If computer random generated number is equal to counter number redirect to win page
    if (value === random) {
      setTimeout(() => {
        winUI(container, random);
      }, 30);
      /* If computer random generated number is greater than the last possible 
    counter number redirect to game-over page*/
    } else if (value === 17 && random > value) {
      setTimeout(() => {
        gameOverUI(container, random);
      }, 30);
    }
  };

  //Listening for counter number changes

  const config = { childList: true };

  const callback = (mutationsList, observer) => {
    for (const mutation of mutationsList) {
      if (mutation.type === "childList") {
        let value = Number(mutation.target.innerText);

        //If counter number value is equal to 0 disable decrement button
        if (value === 0) {
          decrement.disabled = true;
        } else {
          decrement.disabled = false;
        }

        //If counter number value is equal to 17 disable increment button
        if (value === 17) {
          increment.disabled = true;
        } else {
          increment.disabled = false;
        }

        rainEffect(value);
        winOrLose(random, value, container);
      }
    }
  };

  const observer = new MutationObserver(callback);

  observer.observe(output, config);
};
