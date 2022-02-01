import { removeDrops } from "./removeDrops.js";

export const rainEffect = (value) => {
  /*Remove rain drops between counter value changes */
  removeDrops();

  if (value !== 0) {
    /*Drops creation*/

    let amount = value * 13;

    let i = 0;
    while (i < amount) {
      let drop = document.createElement("i");
      drop.classList.add("drop");

      let size = Math.random() * 5;

      let posX = Math.floor(Math.random() * document.body.offsetWidth);

      let delay = Math.random() * -20;
      let duration = Math.random() * 5;

      drop.style.width = `${0.2 + size}px`;
      drop.style.left = posX + "px";

      drop.style.animationDelay = delay + "s";

      drop.style.animationDuration = 1 + duration + "s";

      document.body.append(drop);
      i++;
    }
  }
};
