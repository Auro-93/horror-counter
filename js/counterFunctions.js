export const counterFunc = (increment, decrement, output) => {
  const increaseNum = () => {
    let outputNumber = Number(output.textContent);

    if (outputNumber < 17) {
      output.textContent = outputNumber += 1;
    } else {
      return;
    }
  };

  const decreaseNum = () => {
    let outputNumber = Number(output.textContent);

    if (outputNumber > 0) {
      output.textContent = outputNumber -= 1;
    } else {
      return;
    }
  };

  increment.addEventListener("click", increaseNum);
  decrement.addEventListener("click", decreaseNum);
  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowDown") {
      decreaseNum();
    } else if (e.key === "ArrowUp") {
      increaseNum();
    } else return;
  });
};
