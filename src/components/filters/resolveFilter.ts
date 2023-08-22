import { resolveBlur } from '@utils/effects/blur';
import { resolveBrightness } from '@utils/effects/brighten';
import { resolveGrayscale } from '@utils/effects/grayscale';

const resolveFilterPart = (
  resolver: (value: number) => string,
  value?: number,
) =>
  typeof value === 'undefined' ? null : resolver(value);

type TConfig = {
  blur?: number;
  brightness?: number;
  grayscale?: number;
};
export const resolveFilter = ({
  blur,
  brightness,
  grayscale,
}: TConfig) =>
  [
    resolveFilterPart(resolveBlur, blur),
    resolveFilterPart(resolveBrightness, brightness),
    resolveFilterPart(resolveGrayscale, grayscale),
  ]
    .filter(Boolean)
    .join(' ');
