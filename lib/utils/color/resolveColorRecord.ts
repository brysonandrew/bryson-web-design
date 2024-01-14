import {
  TBaseColorRecord,
  TCssVar,
} from '@lib/types/color';
import { TKeyStr } from '@lib/types/keys';
import { resolveCssVar } from './resolveCssVar';

export const resolveColorRecord = <
  T extends TBaseColorRecord,
>(
  record: T,
) => {
  type TKey = TKeyStr<T>;
  type TResult = Record<TKey, TCssVar>;
  const keys = Object.keys(record) as TKey[];
  const result = keys.reduce((a, key) => {
    const value = resolveCssVar<TKey>(key);
    return {
      [key]: value,
      ...a,
    };
  }, {} as TResult);
  return result;
};
