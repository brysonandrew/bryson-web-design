import { TColorValue } from '@brysonandrew/color-base/config/types';

export const formatFilterDropShadow = <V extends TColorValue>(
  color: V,
  spread = 1,
) => {
  return `drop-shadow(0px 0px ${spread}px ${color})` as const;
};

export type TDropShadow<V extends TColorValue> = ReturnType<
  typeof formatFilterDropShadow<V>
>;
