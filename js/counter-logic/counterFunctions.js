export const counterFunc = (increment, decrement, output) => {
  const increaseNum = () => {
    let outputNumber = Number(output.textContent);

    /*Increase counter number only if it's smaller than 17*/
    if (outputNumber < 17) {
      output.textContent = outputNumber += 1;
    }
  };

  const decreaseNum = () => {
    let outputNumber = Number(output.textContent);

    /*Decrease counter number only if it's greater than 0*/
    if (outputNumber > 0) {
      output.textContent = outputNumber -= 1;
    }
  };

  increment.addEventListener("click", increaseNum);
  decrement.addEventListener("click", decreaseNum);
  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowDown") {
      decreaseNum();
    } else if (e.key === "ArrowUp") {
      increaseNum();
    }
  });
};
