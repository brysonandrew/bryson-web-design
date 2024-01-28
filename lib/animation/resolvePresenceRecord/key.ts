import {
  FADE_PREFIX,
  PLACEHOLDER,
  _SVD,
  _VD,
} from '@brysonandrew/animation';
import {
  TFade,
  TPresenceConfig,
  TRotate,
  TShift,
  TZoom,
} from '@brysonandrew/animation/config/types/presence/config';
import {
  TFadeKey,
  TPresenceConfigKey,
  TRotateKey,
  TShiftKey,
  TZoomKey,
} from '@brysonandrew/animation/config/types/presence/key';
import { isValidFade } from '@brysonandrew/animation/resolvePresenceRecord/value/fade';
import { isValidRotate } from '@brysonandrew/animation/resolvePresenceRecord/value/rotate';
import { isValidShift } from '@brysonandrew/animation/resolvePresenceRecord/value/shift';
import { isValidZoom } from '@brysonandrew/animation/resolvePresenceRecord/value/zoom';
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
    `${fadeKey}${_VD}${shiftKey}${_VD}${zoomKey}${_VD}${rotateKey}` as TPresenceConfigKey<T>;
  return recordKey;
};
