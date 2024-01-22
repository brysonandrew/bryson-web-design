import { TDefaultStyle } from '../config/types';
import { TBrightenProps } from '@brysonandrew/filter-animate/Brighten';
import { resolveComponent } from '../utils/resolveComponent';
import {
  TBlankProps,
  TCoreLayoutRecord,
  TLayoutComponentProps,
  TLayoutRecordProps,
  TLayoutRecordValue,
} from './types';
import { resolveGlow } from '@brysonandrew/app/layout/glow';

type TConfig<S extends TDefaultStyle> = TLayoutRecordProps &
  S;
export const useLayoutRecord = <S extends TDefaultStyle>(
  value: TConfig<S>,
) => {
  const { Back, Blank, Glow, Brighten, ...STYLE } = value;
  const style = {
    borderRadius: STYLE.BORDER_RADIUS.MD,
  };
  const CORE: TCoreLayoutRecord = {
    Back: resolveComponent<TBlankProps>(style, Back),
    Blank: resolveComponent<TBlankProps>(style, Blank),
    Brighten: resolveComponent<TBrightenProps>(
      style,
      Brighten,
    ),
  };

  const BASE: TLayoutRecordValue = { ...CORE };
  if (Glow) {
    const componentProps: TLayoutComponentProps = {
      Glow,
      ...CORE,
      ...STYLE,
    };
    BASE.Glow = resolveGlow(componentProps);
  }

  return BASE;
};
