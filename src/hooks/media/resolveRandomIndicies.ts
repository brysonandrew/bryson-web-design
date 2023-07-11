import { resolveCountRequired } from "./resolveCountRequired";

export const resolveRandomIndicies = (countAvailable: number) => {
  const indicies: number[] = [];
  const countRequired = resolveCountRequired();
  while (indicies.length < countRequired) {
    const next = ~~(countAvailable * Math.random());
    if (!indicies.includes(next)) {
      indicies.push(next);
    }
  }

  return indicies;
};