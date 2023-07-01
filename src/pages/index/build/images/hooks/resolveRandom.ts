import { TModule } from "@t/index";

const screenFiles = import.meta.glob(
  "/assets/screens/**/+([0-9]|!(*[a-z]*)[0-9]) Small.png",
);
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
  const items: TModule[] = [];

  for await (const index of indicies) {
    const next = await values[index]() as TModule;
    items.push(next);
  }

  return items;
};
