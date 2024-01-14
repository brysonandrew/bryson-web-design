import { TKeyStr } from '@lib/types/keys';

export const resolveCssVarRecord = <T extends object>(
  config: T,
): string => {
  type TKey = TKeyStr<T>;
  type TEntry = [TKey, string];
  const entries = Object.entries(config) as TEntry[];
  const result = entries.reduce(
    (a, [key, value]: TEntry) => {
      return `${a}
--${key}: ${value};`;
    },
    ``,
  );

  return result;
};
