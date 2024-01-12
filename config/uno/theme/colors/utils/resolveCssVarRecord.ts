export const resolveCssVarRecord = <T extends string>(
  config: Record<T, string>,
) => {
  const entries = Object.entries(config) as [T, string][];
  const result = entries.reduce((a, [key, value]) => {
    return `${a}
--${key}: ${value};`;
  }, ``);

  return result;
};
