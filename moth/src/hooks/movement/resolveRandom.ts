const randomX = () => (Math.random() - 0.5) * 1.2;
const randomY = () => (Math.random() - 0.5) * 0.4;

export const resolveRandom = () => ({
  x: randomX(),
  y: randomY(),
});