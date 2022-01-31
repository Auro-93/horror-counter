import { rainEffect } from "./rainEffect.js";
import { gameOverUI } from "./gameOverUI.js";
import { winUI } from "./winUI.js";

export const outputNumFunc = (
  increment,
  decrement,
  output,
  random,
  container
) => {
  const winOrLose = (random, value, container) => {
    if (value === random) {
      setTimeout(() => {
        winUI(container, random);
      }, 30);
    } else if (value === 17 && random > value) {
      setTimeout(() => {
        gameOverUI(container, random);
      }, 30);
    }
  };

  const config = { childList: true };

  const callback = (mutationsList, observer) => {
    for (const mutation of mutationsList) {
      if (mutation.type === "childList") {
        let value = Number(mutation.target.innerText);

        if (value === 0) {
          decrement.disabled = true;
        } else {
          decrement.disabled = false;
        }

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
