import {
  isValidFade,
  TTarget,
} from '@brysonandrew/animation';
import { TPresenceConfig } from '@brysonandrew/animation/config/types/presence/config';
import { TPresenceConfigValue } from '@brysonandrew/animation/config/types/presence/value';
import {
  isValidRotate,
  resolveRotateKey,
} from '@brysonandrew/animation/resolvePresenceRecord/value/rotate';
import {
  isValidShift,
  resolveShiftKey,
  resolveShiftValue,
} from '@brysonandrew/animation/resolvePresenceRecord/value/shift';
import {
  isValidZoom,
  resolveZoomKey,
} from '@brysonandrew/animation/resolvePresenceRecord/value/zoom';

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
    initial.opacity = initialValue;
    animate.opacity = 1;
    exit.opacity = exitValue ?? initialValue;
  }

  if (isValidShift(shift)) {
    const [initialValue, direction, exitValue] = shift;
    const shiftKey = resolveShiftKey(direction);
    const shiftValue = resolveShiftValue(
      exitValue,
      direction,
    );

    initial[shiftKey] = initialValue;
    animate[shiftKey] = shiftValue;
    exit[shiftKey] = exitValue ?? initialValue;
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
