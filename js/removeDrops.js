export const removeDrops = () => {
  let drops = document.querySelectorAll(".drop");

  if (drops) {
    drops.forEach((e) => e.remove());
  } else {
    return;
  }
};
