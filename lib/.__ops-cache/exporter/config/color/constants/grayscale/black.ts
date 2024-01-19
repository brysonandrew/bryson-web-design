import { resolveColorOpacityRange } from '../../utils/resolveColorOpacityRange';
import { resolveColorSeries } from '../../utils/resolveColorSeries';
import { resolveGrayscaleRange } from '../../utils/resolveGrayscaleRange';
import { resolveRgbRecord } from '../../utils/resolveRgbRecord';

export const BLACK_RGBS = resolveGrayscaleRange(0, 85);

const OPACITY_VARIATIONS = resolveColorOpacityRange(
  'black',
  BLACK_RGBS[0],
);
const COLOR_SERIES = resolveColorSeries(
  'black',
  BLACK_RGBS,
);

export const BLACK = {
  ...COLOR_SERIES,
  ...OPACITY_VARIATIONS,
} as const;

export const BLACK_RGB_RECORD = resolveRgbRecord<'black'>(
  BLACK_RGBS,
  'black',
);
