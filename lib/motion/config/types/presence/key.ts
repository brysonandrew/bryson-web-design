import {
  TFadePrefix,
  TPlaceholder,
  T_SVD,
  T_VD,
} from '@brysonandrew/motion-config-types';
import {
  TFade,
  TFadeValue,
  TPresenceConfig,
  TRotate,
  TRotateType,
  TRotateValue,
  TShift,
  TShiftDirection,
  TShiftValue,
  TZoom,
  TZoomDirection,
  TZoomValue,
} from '@brysonandrew/motion-config-types';

type TSuffixDefinedN<T extends number | undefined> =
  T extends undefined ? '' : `${T}${T_SVD}`;

type TPrefixDefinedN<T extends number | undefined> =
  T extends undefined ? '' : `${T_SVD}${T}`;

type TPrefixDefined<T extends number | string | undefined> =
  T extends undefined ? '' : `${T_SVD}${T}`;

//fade

export type TFadeValueKey<
  T extends TFade,
  TVI extends TFadeValue | undefined = T[0],
  TVO extends TFadeValue | undefined = T[1],
> = `${TSuffixDefinedN<TVI>}${TFadePrefix}${TPrefixDefinedN<TVO>}`;

export type TFadeKey<T extends TFade | undefined> =
  T extends TFade ? TFadeValueKey<T> : TPlaceholder;

//shift
type TShiftValueKey<
  T extends TShift,
  TVI extends TShiftValue = T[0],
  TD extends TShiftDirection | undefined = T[1],
  TVO extends TShiftValue | undefined = T[2],
> = `${TVI}${TPrefixDefined<TD>}${TPrefixDefined<TVO>}`;

export type TShiftKey<T extends TShift | undefined> =
  T extends TShift ? TShiftValueKey<T> : TPlaceholder;

//zoom
type TZoomValueKey<
  T extends TZoom,
  TVI extends TZoomValue = T[0],
  TD extends TZoomDirection | undefined = T[1],
  TVO extends TZoomValue | undefined = T[2],
> = `${TVI}${TPrefixDefined<TD>}${TPrefixDefined<TVO>}`;

export type TZoomKey<T extends TZoom | undefined> =
  T extends TZoom ? TZoomValueKey<T> : TPlaceholder;

//rotate
type TRotateValueKey<
  T extends TRotate,
  TVI extends TRotateValue = T[0],
  TT extends TRotateType | undefined = T[1],
  TVO extends TRotateValue | undefined = T[2],
> = `${TVI}${TPrefixDefined<TT>}${TPrefixDefined<TVO>}`;

export type TRotateKey<T extends TRotate | undefined> =
  T extends TRotate ? TRotateValueKey<T> : TPlaceholder;

//result
export type TPresenceConfigKey<T extends TPresenceConfig> =
  `${TFadeKey<T['fade']>}${T_VD}${TShiftKey<
    T['shift']
  >}${T_VD}${TZoomKey<T['zoom']>}${T_VD}${TRotateKey<
    T['rotate']
  >}`;
