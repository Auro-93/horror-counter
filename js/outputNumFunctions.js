import { rainEffect } from "./rainEffect.js";

export const outputNumFunc = (
  increment,
  decrement,
  output,
  counterGameRain
) => {
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

        rainEffect(value, counterGameRain);
      }
    }
  };

  const observer = new MutationObserver(callback);

  observer.observe(output, config);
};
