import {
  TColorValue,
  TRgb,
  TRgbaValue,
} from '@brysonandrew/color-base/config/types';
import { TKeyStr } from '@brysonandrew/config-types/keys';
import { resolveRgbaValue } from '@brysonandrew/color-base/resolveRgbaValue';
import {
  formatShadow,
  TShadow,
  TShadowDouble,
} from '../../css/format/shadow';
import {
  formatFilterDropShadow,
  TDropShadow,
} from '../../css/format/filter/drop-shadow';

export const resolveGlowRecord = <
  T extends Record<string, TRgb>,
>(
  record: T,
) => {
  type TKey = TKeyStr<T>;
  type TValue = Extract<T[TKey], string>;
  type TResult = {
    drop: Record<TKey, TDropShadow<TColorValue>>;
    box: Record<TKey, TShadow | TShadowDouble>;
  };
  const keys = Object.entries(record) as [TKey, TValue][];
  const result = keys.reduce(
    (a, [key, rgb]) => {
      const color = resolveRgbaValue(rgb);
      const color05 = resolveRgbaValue(rgb, 5);
      a.drop[key] = formatFilterDropShadow<TColorValue>(color);
      a.box[key] = `${formatShadow<TColorValue>(
        color,
      )}, ${formatShadow<TRgbaValue>(color05)}`;
      return a;
    },
    { drop: {}, box: {} } as TResult,
  );
  return result;
};
