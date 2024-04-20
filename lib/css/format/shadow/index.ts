import { TColorValue } from '@brysonandrew/color-base/config/types';

export const formatShadow = <V extends TColorValue>(
  color: V,
  blur = 1,
) => `0 0 ${blur}px ${color}` as const;

export type TShadow<
  V extends TColorValue = TColorValue,
> = ReturnType<typeof formatShadow<V>>;

export type TShadowDouble<
  V extends TColorValue = TColorValue,
> = `${TShadow<V>}, ${TShadow<V>}`;
