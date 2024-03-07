export const arrToRecord = <
  T extends object,
  K extends keyof T = keyof T,
>(
  items: readonly T[],
  key: K,
) => {
  type TValue = T[K];

  return items.reduce((a, c: T) => {
    const value = c[key];
    if (typeof value === 'string') {
      return { ...a, [value]: c };
    }
    return a;
  }, {} as Record<Extract<TValue, string>, T>);
};
