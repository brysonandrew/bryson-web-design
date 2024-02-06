import { TDefaultStyle } from '@brysonandrew/app/config/types';
import { TBrightenProps } from '@brysonandrew/layout/effects/Brighten';
import { withStyle } from '@brysonandrew/app/utils/withStyle';
import {
  DEFAULT_CONFIG,
  TCoreLayoutRecord,
  TLayoutComponentProps,
  TLayoutRecordProps,
  TLayoutRecordValue,
} from '@brysonandrew/app';
import { mergeDeepObjects } from '@brysonandrew/utils-object';
import {
  TBlankProps,
  TBlankMotionProps,
} from '@brysonandrew/layout-blank';
import {
  TBackProps,
  TBackMotionProps,
  TBackBlurProps,
} from '@brysonandrew/layout-back';
import { withLight } from '@brysonandrew/layout-light';

type TConfig<S extends TDefaultStyle> = TLayoutRecordProps &
  S;
export const useLayoutRecord = <S extends TDefaultStyle>(
  config: TConfig<S>,
) => {
  console.log(config);
  const APP = { ...DEFAULT_CONFIG, ...config };
  console.log(APP);

  const commonProps = {
    style: {
      borderRadius: APP.BORDER_RADIUS.MD,
    },
  };

  const CORE: TCoreLayoutRecord = {
    ...DEFAULT_CONFIG,
    Back: withStyle<TBackProps>(commonProps, APP.Back),
    BackMotion: withStyle<TBackMotionProps>(
      commonProps,
      APP.BackMotion,
    ),
    BackBlur: withStyle<TBackBlurProps>(
      commonProps,
      APP.BackBlur,
    ),
    Blank: withStyle<TBlankProps>(commonProps, APP.Blank),
    BlankMotion: withStyle<TBlankMotionProps>(
      commonProps,
      APP.BlankMotion,
    ),
    BackFill: withStyle<TBlankProps>(
      commonProps,
      APP.BackFill,
    ),
    Brighten: withStyle<TBrightenProps>(
      commonProps,
      APP.Brighten,
    ),
  };

  const BASE: TLayoutRecordValue = { ...CORE };

  const Glow = APP?.Glow;
  if (Glow) {
    const componentProps: TLayoutComponentProps = {
      Glow,
      ...CORE,
      ...APP,
    };
    BASE.LIGHT = withLight(componentProps);
  }

  return BASE;
};
