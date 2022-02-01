export const gameOverUI = (container, random) => {
  container.innerHTML = "";

  let title = document.createElement("h1");
  title.textContent = "GAME OVER";

  let skullBg = document.createElement("div");
  skullBg.classList.add("game-over-img");

  let results = document.createElement("span");
  results.textContent = random;

  let button = document.createElement("button");
  button.innerHTML = "Try again";

  skullBg.append(results);

  container.append(title, skullBg, button);

  button.addEventListener("click", () => {
    window.location.reload();
  });
};
