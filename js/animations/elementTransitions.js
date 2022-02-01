/*add fade-in transition to container elements at first appearance*/

export const elementTransitions = (container) => {
  Array.from(container.children).forEach((el) => {
    el.classList.add("animate__animated", "animate__fadeIn");
  });
};
