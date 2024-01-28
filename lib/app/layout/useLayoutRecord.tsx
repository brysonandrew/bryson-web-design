import { TDefaultStyle } from '@brysonandrew/app/config/types';
import { TBrightenProps } from '@brysonandrew/filter-animate/Brighten';
import { withStyle } from '@brysonandrew/app/utils/withStyle';
import {
  TBlankProps,
  TCoreLayoutRecord,
  TLayoutComponentProps,
  TLayoutRecordProps,
  TLayoutRecordValue,
} from '@brysonandrew/app';
import { withGlow } from './withGlow';

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
    Back: withStyle<TBlankProps>(style, Back),
    Blank: withStyle<TBlankProps>(style, Blank),
    Brighten: withStyle<TBrightenProps>(style, Brighten),
  };

  const BASE: TLayoutRecordValue = { ...CORE };
  if (Glow) {
    const componentProps: TLayoutComponentProps = {
      Glow,
      ...CORE,
      ...STYLE,
    };
    BASE.Glow = withGlow(componentProps);
  }

  return BASE;
};
