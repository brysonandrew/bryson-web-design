import {
  TColorValue,
  TRgb,
  TRgbaValue,
} from '@brysonandrew/color/main/config/types';
import { TKeyStr } from '@brysonandrew/types/keys';
import { resolveRgbaValue } from '../main/resolveRgbaValue';
import {
  resolveBoxShadow,
  TBoxShadow,
  TBoxShadowDouble,
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
    drop: Record<TKey, TDropShadow<TColorValue>>;
    box: Record<TKey, TBoxShadow | TBoxShadowDouble>;
  };
  const keys = Object.entries(record) as [TKey, TValue][];
  const result = keys.reduce(
    (a, [key, rgb]) => {
      const color = resolveRgbaValue(rgb);
      const color05 = resolveRgbaValue(rgb, 5);
      a.drop[key] = resolveDropShadow<TColorValue>(color);
      a.box[key] = `${resolveBoxShadow<TColorValue>(
        color,
      )}, ${resolveBoxShadow<TRgbaValue>(color05)}`;
      return a;
    },
    { drop: {}, box: {} } as TResult,
  );
  return result;
};
