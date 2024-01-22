import {
  TBaseColorRecord,
  TCssVar,
} from '@brysonandrew/config/color/types';
import { TKeyStr } from '@brysonandrew/types/keys';
import { resolveVarCss } from './resolveVarCss';

export const resolveColorRecord = <
  T extends TBaseColorRecord,
>(
  record: T,
) => {
  type TKey = TKeyStr<T>;
  type TResult = Record<TKey, TCssVar>;
  const keys = Object.keys(record) as TKey[];
  const result = keys.reduce((a, key) => {
    const value = resolveVarCss<TKey>(key);
    return {
      [key]: value,
      ...a,
    };
  }, {} as TResult);
  return result;
};
