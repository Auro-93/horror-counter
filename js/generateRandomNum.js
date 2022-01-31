export const generateRandom = (min, max) => {
  return min + Math.floor(Math.random() * (max - min + 1));
};
