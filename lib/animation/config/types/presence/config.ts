import {
  ROTATE_DIRECTIONS,
  ROTATE_TYPES,
  SHIFT_DIRECTIONS,
  ZOOM_DIRECTIONS,
} from '@brysonandrew/animation/config/constants';
import { TNumberPosPercentValue } from '@brysonandrew/animation/config/types/values';
import { TPositive } from '@brysonandrew/types/assertions/numbers';

export type TXyAxis = 'x' | 'y';

export type TFadeValue = number;
export type TFade = readonly [
  initial?: TFadeValue,
  exit?: TFadeValue,
];

// shift
export type TShiftValue =
  | TNumberPosPercentValue
  | TPositive<number>;
export type TShiftDirection =
  | (typeof SHIFT_DIRECTIONS)[number];
export type TShift = readonly [
  initial: TShiftValue,
  direction?: TShiftDirection,
  exit?: TShiftValue,
];

export type TZoomValue = number;
export type TZoomDirection =
  (typeof ZOOM_DIRECTIONS)[number];
export type TZoom = readonly [
  initial: TZoomValue,
  direction?: TZoomDirection,
  exit?: TZoomValue,
];

export type TRotateType = (typeof ROTATE_TYPES)[number];
// | 'roll' // z - (the axis that runs the length of the fuselage
// | 'pitch' // x - the axis running laterally through the wings
// | 'yaw'; // y - the vertical axis around which the front of the aircraft turns to the left or right whilst its rear turns toward the opposite direction
export type TRotateDirection =
  (typeof ROTATE_DIRECTIONS)[number];
// | 'clockwise'
// | 'anti-clockwise';
export type TRotateValue = number; // | `${number}deg`; // degrees only
export type TRotatePosStringValue = `${number}deg`; // degrees only
export type TRotateNegStringValue = `-${number}deg`; // degrees only
export type TRotateStringValue =
  | TRotatePosStringValue
  | TRotateNegStringValue; // degrees only
export type TDegreeValue = TRotateValue;
//| TRotateStringValue; // degrees only

export type TRotate = readonly [
  initial: TRotateValue,
  type?: TRotateType,
  exit?: TRotateValue,
];

export type TPresenceConfig = {
  fade?: TFade;
  shift?: TShift;
  zoom?: TZoom;
  rotate?: TRotate;
} & (
  | {
      fade: TFade;
    }
  | {
      shift: TShift;
    }
  | {
      zoom: TZoom;
    }
  | {
      rotate: TRotate;
    }
);
