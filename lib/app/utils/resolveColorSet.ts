import { resolveBoxShadow } from '@brysonandrew/color/glow/resolveBoxShadow';

export const resolveRgbaSet = (color: string) => {
  return {
    boxShadow: resolveBoxShadow(color),
    backgroundColor: color,
  };
};

export type TColorSet = ReturnType<typeof resolveRgbaSet>;
