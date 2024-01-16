import { TRgbaValue } from '@lib/color/types';

export const resolveDropShadow = <
  V extends string | TRgbaValue,
>(
  color: V,
  spread = 1,
) => {
  return `drop-shadow(0px 0px ${spread}px ${color})` as const;
};

export type TDropShadow<V extends string> = ReturnType<
  typeof resolveDropShadow<V>
>;
