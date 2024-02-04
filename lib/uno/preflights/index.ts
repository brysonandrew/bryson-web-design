import { RESET } from './reset';
import {
  resolveScrollbar,
  TResolveScrollbarConfig,
} from './resolveScrollbar';
import {
  resolveInput,
  TResolveInputConfig,
} from './resolveInput';
import { Preflight } from 'unocss';

type TPreflightConfig = {
  inputConfig?: TResolveInputConfig;
  scrollbarConfig?: TResolveScrollbarConfig;
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
            resolveScrollbar(scrollbarConfig),
        },
      ]
    : []),
];

export * from './reset';
export * from './resolveInput';
export * from './resolveScrollbar';
