import {
  isValidFade,
  TTarget,
} from '@brysonandrew/motion/core/config';
import { TPresenceConfig } from '@brysonandrew/motion/core/config/types/presence/config';
import { TPresenceConfigValue } from '@brysonandrew/motion/core/config/types/presence/value';
import {
  isValidRotate,
  resolveRotateKey,
} from '@brysonandrew/motion/core/resolvePresenceRecord/value/rotate';
import {
  isValidShift,
  resolveShiftKey,
  resolveShiftValue,
} from '@brysonandrew/motion/core/resolvePresenceRecord/value/shift';
import {
  isValidZoom,
  resolveZoomKey,
} from '@brysonandrew/motion/core/resolvePresenceRecord/value/zoom';

export const resolveRecordValue = <
  T extends TPresenceConfig,
>({
  fade,
  shift,
  zoom,
  rotate,
}: T): TPresenceConfigValue<T> => {
  const initial = {} as TTarget;
  const animate = {} as TTarget;
  const exit = {} as TTarget;

  if (isValidFade(fade)) {
    const [initialValue, exitValue] = fade;
    initial.opacity = initialValue ?? 0;
    animate.opacity = 1;
    exit.opacity = exitValue ?? initial.opacity;
  }

  if (isValidShift(shift)) {
    const [initialValue, direction, exitValue] = shift;
    const shiftKey = resolveShiftKey(direction);
    const originShiftValue = resolveShiftValue(
      initialValue,
      direction,
    );

    initial[shiftKey] = originShiftValue;
    animate[shiftKey] = 0;
    exit[shiftKey] = exitValue ?? originShiftValue;
  }

  if (isValidZoom(zoom)) {
    const [initialValue, directino, exitValue] = zoom;
    const zoomKey = resolveZoomKey(directino);

    initial[zoomKey] = initialValue;
    animate[zoomKey] = 1;
    exit[zoomKey] = exitValue ?? initialValue;
  }

  if (isValidRotate(rotate)) {
    const [initialValue, type, exitValue] = rotate;
    const rotateKey = resolveRotateKey(type);

    initial[rotateKey] = initialValue;
    animate[rotateKey] = 0;
    exit[rotateKey] = exitValue ?? initialValue;
  }

  return {
    initial,
    animate,
    exit,
  } as const;
};
