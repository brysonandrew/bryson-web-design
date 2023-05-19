const screenFiles = import.meta.glob("/screens/**/*.png");
console.log(screenFiles)
const values = Object.values(screenFiles);

export const resolveRandom = async () => {
  const indicies: number[] = [];
  const requiredCount = Math.min(values.length, 9);
  while (indicies.length < requiredCount) {
    const next = ~~(values.length * Math.random());
    if (!indicies.includes(next)) {
      indicies.push(next);
    }
  }
  const items = [];

  for await (const index of indicies) {
    const next = await values[index]();
    items.push(next);
  }

  return items;
};
