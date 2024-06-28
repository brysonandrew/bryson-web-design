import { RESET } from './reset';
import {
  preflightsScrollbarCss,
  TPreflightsScrollbarCssConfig,
} from './scrollbar';
import {
  resolveInput,
  TResolveInputConfig,
} from './resolveInput';
import { Preflight } from 'unocss';

type TPreflightConfig = {
  inputConfig?: TResolveInputConfig;
  scrollbarConfig?: TPreflightsScrollbarCssConfig;
};
export const resolvePreflights = <T extends object>({
  inputConfig,
  scrollbarConfig,
}: TPreflightConfig): Preflight<T>[] => [
  {
    layer: 'reset',
    getCSS: () => RESET,
  },
  ...(inputConfig
    ? [
        {
          getCSS: (): string => resolveInput(inputConfig),
        },
      ]
    : []),
  ...(scrollbarConfig
    ? [
        {
          getCSS: (): string =>
            preflightsScrollbarCss(scrollbarConfig),
        },
      ]
    : []),
];

export * from './reset';
export * from './resolveInput';
export * from './scrollbar';
export * from './scrollbar/manual';
export * from './scrollbar/manual/is';
