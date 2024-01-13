import {
  TBaseColorKey,
  TColorRecord,
  TCssVar,
} from '@lib/types/color';
import { resolveCssVar } from './resolveCssVar';

export const resolveColorRecord = <K extends TBaseColorKey>(
  record: TColorRecord<K>,
) => {
  type TResult = Record<K, TCssVar>;
  const keys = Object.keys(record) as K[];
  const result = keys.reduce((a, key) => {
    const value = resolveCssVar<K>(key);
    return {
      [key]: value,
      ...a,
    };
  }, {} as TResult);
  return result;
};
