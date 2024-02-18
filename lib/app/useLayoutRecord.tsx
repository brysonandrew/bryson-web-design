import { TDefaultStyle } from '@brysonandrew/app/config/types';
import {
  DEFAULT_CONFIG,
  TCoreLayoutRecord,
  TLayoutComponentProps,
  TLayoutRecordProps,
  TLayoutRecordValue,
} from '@brysonandrew/app';
import { withLight } from '@brysonandrew/layout-light/withLight';

type TConfig<S extends TDefaultStyle> = TLayoutRecordProps &
  S;
export const useLayoutRecord = <S extends TDefaultStyle>(
  config: TConfig<S>,
) => {
  // const APP = { ...DEFAULT_CONFIG, ...config };

  // const commonProps = {
  //   style: {
  //     borderRadius: APP.BORDER_RADIUS.MD,
  //   },
  // };

  const CORE: TCoreLayoutRecord = { ...DEFAULT_CONFIG, ...config };
  // {
  //   ...DEFAULT_CONFIG,
    // Back: withStyle<TBackProps>(commonProps, APP.Back),
    // BackMotion: withStyle<TBackMotionProps>(
    //   commonProps,
    //   APP.BackMotion,
    // ),
    // BackFillMotion: withStyle<TBackMotionProps>(
    //   commonProps,
    //   APP.BackFillMotion,
    // ),
    // BackBlur: withStyle<TBackBlurProps>(
    //   commonProps,
    //   APP.BackBlur,
    // ),
    // Blank: withStyle<TBlankProps>(commonProps, APP.Blank),
    // BlankMotion: withStyle<TBlankMotionProps>(
    //   commonProps,
    //   APP.BlankMotion,
    // ),
    // BackFill: withStyle<TBlankProps>(
    //   commonProps,
    //   APP.BackFill,
    // ),
    // Brighten: withStyle<TBrightenProps>(
    //   commonProps,
    //   APP.Brighten,
    // ),
  // };

  const BASE: TLayoutRecordValue = { ...CORE };

    // const componentProps: TLayoutComponentProps = {
    //   ...CORE,
    // };
    // BASE.LIGHT = withLight(componentProps);

  return BASE;
};
