import { resolveBoxShadow } from '@brysonandrew/config/color/utils/glow/resolveBoxShadow';

export const resolveColorSet = (color: string) => {
  return {
    boxShadow: resolveBoxShadow(color),
    backgroundColor: color,
  };
};

export type TColorSet = ReturnType<typeof resolveColorSet>;
