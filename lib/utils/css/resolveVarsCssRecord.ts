import { TKeyStr } from '@brysonandrew/config-types/keys';

export const resolveVarsCssRecord = <T extends object>(
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
