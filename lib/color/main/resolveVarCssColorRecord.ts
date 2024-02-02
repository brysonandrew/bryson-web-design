import {
  TBaseColorRecord,
  TCssVar,
} from '@brysonandrew/color-main/config/types';
import { TKeyStr } from '@brysonandrew/types/keys';
import { resolveVarCss } from './resolveVarCss';

export const resolveVarCssColorRecord = <
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
