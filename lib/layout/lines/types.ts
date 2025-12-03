import {
  TClassOverrides,
  TDivMotionProps,
  TDivProps,
  THrMotionProps,
  THrProps,
} from '@brysonandrew/config-types';

export type TLinesDivOptions = TDivProps &
  TDivMotionProps &
  TClassOverrides;

export type TLinesOptions = THrProps &
  THrMotionProps &
  TClassOverrides;
