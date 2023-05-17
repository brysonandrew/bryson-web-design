const screenFiles = import.meta.glob(
  "/assets/screens/**/*.png",
);
const values = Object.values(screenFiles);

export const resolveRandom = async () => {
  const indicies = [];
  const requiredCount = Math.min(values.length, 9);
  while (indicies.length < requiredCount) {
    const next = ~~(values.length * Math.random());
    indicies.push(next);
  }
  const items = [];

  for await (const index of indicies) {
    const next = await values[index]();
    items.push(next);
  }

  return items;
};
