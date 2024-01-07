import { COLOR_VARIABLES_LOOKUP } from 'config/app/colors';
import { CSSProperties } from 'react';

export type TColorKey =
  | Extract<
      keyof (keyof typeof COLOR_VARIABLES_LOOKUP),
      string
    >
  | string;

export type TMixblendModeKey = Pick<
  CSSProperties,
  'mixBlendMode'
>['mixBlendMode'];
