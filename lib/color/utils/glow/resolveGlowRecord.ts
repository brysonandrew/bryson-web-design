import { TRgb, TRgbaValue } from '@brysonandrew/lib/color/types';
import { TKeyStr } from '@brysonandrew/lib/types/keys';
import { varRgb } from '../varRgb';
import {
  resolveBoxShadow,
  TBoxShadow,
} from './resolveBoxShadow';
import {
  resolveDropShadow,
  TDropShadow,
} from './resolveDropShadow';

export const resolveGlowRecord = <
  T extends Record<string, TRgb>,
>(
  record: T,
) => {
  type TKey = TKeyStr<T>;
  type TValue = Extract<T[TKey], string>;
  type TResult = {
    drop: Record<TKey, TDropShadow<TRgbaValue>>;
    box: Record<
      TKey,
      `${TBoxShadow<TRgbaValue>}, ${TBoxShadow<TRgbaValue>}`
    >;
  };
  const keys = Object.entries(record) as [TKey, TValue][];
  const result = keys.reduce(
    (a, [key, rgb]) => {
      const color = varRgb(rgb);
      const color05 = varRgb(rgb, 5);
      a.drop[key] = resolveDropShadow<TRgbaValue>(color);
      a.box[key] = `${resolveBoxShadow<TRgbaValue>(
        color,
      )}, ${resolveBoxShadow<TRgbaValue>(color05)}`;
      return a;
    },
    { drop: {}, box: {} } as TResult,
  );
  return result;
};
