import { COLOR_VARS_RECORD } from '../../../app/colors/constants';
import {
  TColorKey,
  TColorVarsRecordKey,
} from '@app/colors/types';
import { TColorRgbKey } from '@lib/color/types';
import { resolveColor } from '@lib/color/utils/resolveColor';

export const resolveShadowLg = (
  spread: number,
  colorKey: TColorRgbKey<TColorKey> = 'white-9',
) => {
  const config = {
    opacity: 0.8,
    colorKey,
    colorRecord: COLOR_VARS_RECORD,
  };
  return `0px 0px ${spread}px ${resolveColor<TColorVarsRecordKey>(
    {
      ...config,
      opacity: 0.5,
    },
  )}, 0px 0px ${spread}px ${resolveColor({
    ...config,
  })}`;
};
