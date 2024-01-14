import { COLOR_RECORD } from '../../../app/colors/constants';
import { TColorKey } from '@app/colors/types';
import { TColorRgbKey } from '@lib/types/color';
import { resolveColor } from '@lib/utils/color/resolveColor';

export const resolveDropShadow = (
  spread: number,
  colorKey: TColorRgbKey<TColorKey> = 'white-9',
) => {
  const config = {
    opacity: 0.8,
    colorKey,
    colorRecord: COLOR_RECORD,
  };
  return `drop-shadow(0px 0px ${spread}px ${resolveColor(
    config,
  )})`;
};
