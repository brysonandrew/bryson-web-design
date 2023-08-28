export const resolveRandomIndicies = (
  availableCount: number,
) => {
  const indicies: number[] = [];
  const requiredCount = Math.min(availableCount, 8);
  while (indicies.length < requiredCount) {
    const next = ~~(availableCount * Math.random());
    if (!indicies.includes(next)) {
      indicies.push(next);
    }
  }

  return indicies;
};
