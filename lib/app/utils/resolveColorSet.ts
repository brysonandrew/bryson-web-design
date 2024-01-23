import { resolveBoxShadow } from '@brysonandrew/color/utils/glow/resolveBoxShadow';

export const resolveRgbaSet = (color: string) => {
  return {
    boxShadow: resolveBoxShadow(color),
    backgroundColor: color,
  };
};

export type TColorSet = ReturnType<typeof resolveRgbaSet>;
