import { TColorValue } from '@brysonandrew/color/main/config/types';

export const resolveBoxShadow = <V extends TColorValue>(
  color: V,
  blur = 1,
) => `0 0 ${blur}px ${color}` as const;

export type TBoxShadow<
  V extends TColorValue = TColorValue,
> = ReturnType<typeof resolveBoxShadow<V>>;

export type TBoxShadowDouble<
  V extends TColorValue = TColorValue,
> = `${TBoxShadow<V>}, ${TBoxShadow<V>}`;
