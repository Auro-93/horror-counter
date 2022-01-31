export const winUI = (container, random) => {
  container.innerHTML = "";

  let counterGameCard = document.querySelector(".counter-game-card");
  let body = document.body;

  body.setAttribute("data-theme", "fairy");
  counterGameCard.setAttribute("data-theme", "fairy");

  let title = document.createElement("h1");
  title.textContent = "YOU WIN!";

  let bgFairy = document.createElement("div");
  bgFairy.classList.add("win-img");

  let results = document.createElement("span");
  results.textContent = random;

  bgFairy.append(results);

  let button = document.createElement("button");
  button.innerHTML = "Play again";

  container.append(title, bgFairy, button);

  button.addEventListener("click", () => {
    window.location.reload();
  });
};
