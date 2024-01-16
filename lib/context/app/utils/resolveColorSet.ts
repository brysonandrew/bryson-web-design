import { resolveBoxShadow } from '@lib/color/utils/glow/resolveBoxShadow';

export const resolveColorSet = (color: string) => {
  return {
    boxShadow: resolveBoxShadow(color),
    backgroundColor: color,
  };
};

export type TColorSet = ReturnType<typeof resolveColorSet>;
