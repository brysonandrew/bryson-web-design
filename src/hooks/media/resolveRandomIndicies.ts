import { resolveCountRequired } from "./resolveCountRequired";

export const resolveRandomIndicies = () => {
  const indicies: number[] = [];
  const count = resolveCountRequired();
  while (indicies.length < count) {
    const next = ~~(count * Math.random());
    if (!indicies.includes(next)) {
      indicies.push(next);
    }
  }

  return indicies;
};