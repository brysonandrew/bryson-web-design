import { CSSProperties } from 'react';
import { FLEX } from '@brysonandrew/uno-shortcuts/flex';

export type TMixblendModeKey = Pick<
  CSSProperties,
  'mixBlendMode'
>['mixBlendMode'];

export type TFlexShortcut = keyof typeof FLEX;
