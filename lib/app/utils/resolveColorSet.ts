import { formatShadow } from '@brysonandrew/css-format/shadow';

export const resolveRgbaSet = (color: string) => {
  return {
    boxShadow: formatShadow(color),
    backgroundColor: color,
  };
};

export type TColorSet = ReturnType<typeof resolveRgbaSet>;
