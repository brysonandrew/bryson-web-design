import { COLORS } from '@constants/colors';
import { CSSProperties } from 'react';

export type TColorKey = keyof typeof COLORS;

export type TMixblendModeKey = Pick<
  CSSProperties,
  'mixBlendMode'
>['mixBlendMode'];
