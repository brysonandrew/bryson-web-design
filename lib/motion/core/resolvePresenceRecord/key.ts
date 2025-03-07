import {
  FADE_PREFIX,
  PLACEHOLDER,
  _SVD,
  VALUE_DELIMITER,
} from '@brysonandrew/motion-config-constants';
import {
  TFade,
  TPresenceConfig,
  TRotate,
  TShift,
  TZoom,
} from '@brysonandrew/motion-config-types';
import {
  TFadeKey,
  TPresenceConfigKey,
  TRotateKey,
  TShiftKey,
  TZoomKey,
} from '@brysonandrew/motion-config-types';
import { isValidFade } from '@brysonandrew/motion-core';
import { isValidRotate } from '@brysonandrew/motion-core';
import { isValidShift } from '@brysonandrew/motion-core';
import { isValidZoom } from '@brysonandrew/motion-core';

const suffixDefined = <T extends string | number>(v?: T) =>
  typeof v === 'undefined' ? '' : (`${v}${_SVD}` as const);
const prefixDefined = <T extends string | number>(v?: T) =>
  typeof v === 'undefined' ? '' : (`${_SVD}${v}` as const);

const resolveFadeKey = ([initial, exit]: TFade) => {
  return `${suffixDefined(
    initial,
  )}${FADE_PREFIX}${prefixDefined(exit)}` as const;
};

const resolveShiftKey = ([
  initial,
  direction,
  exit,
]: TShift) => {
  return `${initial}${prefixDefined(
    direction,
  )}${prefixDefined(exit)}` as const;
};

const resolveZoomKey = ([initial, type, exit]: TZoom) => {
  return `${initial}${prefixDefined(type)}${prefixDefined(
    exit,
  )}` as const;
};

const resolveRotateKey = ([
  initial,
  type,
  exit,
]: TRotate) => {
  return `${initial}${prefixDefined(type)}${prefixDefined(
    exit,
  )}` as const;
};

export const resolveRecordKey = <
  T extends TPresenceConfig,
>({
  fade,
  shift,
  zoom,
  rotate,
}: T): TPresenceConfigKey<T> => {
  const fadeKey: TFadeKey<typeof fade> = isValidFade(fade)
    ? resolveFadeKey(fade)
    : PLACEHOLDER;

  const shiftKey: TShiftKey<typeof shift> = isValidShift(
    shift,
  )
    ? resolveShiftKey(shift)
    : PLACEHOLDER;
  const zoomKey: TZoomKey<typeof zoom> = isValidZoom(zoom)
    ? resolveZoomKey(zoom)
    : PLACEHOLDER;
  const rotateKey: TRotateKey<typeof rotate> =
    isValidRotate(rotate)
      ? resolveRotateKey(rotate)
      : PLACEHOLDER;
  const recordKey =
    `${fadeKey}${VALUE_DELIMITER}${shiftKey}${VALUE_DELIMITER}${zoomKey}${VALUE_DELIMITER}${rotateKey}` as TPresenceConfigKey<T>;
  return recordKey;
};
