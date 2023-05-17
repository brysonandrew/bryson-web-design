const screenFiles = import.meta.glob(
  "../../../../assets/screens/**/*.png",
);
const values = Object.values(screenFiles);

console.log(screenFiles);

export const resolveRandom = async () => {
  const indicies = [];
  const requiredCount = Math.min(values.length, 9);
  console.log("🚀 ~ file: resolveRandom.ts:11 ~ resolveRandom ~ requiredCount:", requiredCount)
  
  while (indicies.length < requiredCount) {
    const next = ~~(values.length * Math.random());
    indicies.push(next);
  }
console.log(indicies)
  const items = [];

  for await (const index of indicies) {
    const next = await values[index]();
    items.push(next);
  }
  console.log(items)

  return items;
};
