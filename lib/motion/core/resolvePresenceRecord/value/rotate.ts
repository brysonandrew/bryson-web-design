import { TRotateMotionPropsKey } from '@brysonandrew/motion/core/config';
import {
  TRotate,
  TRotateType,
} from '@brysonandrew/motion/core/config/types/presence/config';
import { ROTATE_TYPES } from '@brysonandrew/motion/core/config/constants';

export const isValidRotate = (
  rotate?: TRotate,
): rotate is TRotate => {
  if (typeof rotate === 'undefined') return false;

  const errorMessage = (v: string) =>
    `Invalid 'rotate' animation value, ${v} invalid.`;

  if (Array.isArray(rotate)) {
    const [valueIn, type, valueOut] = rotate;

    const isValidType =
      typeof type === 'undefined' ||
      ROTATE_TYPES.includes(type);

    if (!isValidType) {
      console.error(errorMessage('type'), type, rotate);
    }

    const isValidValue =
      typeof valueIn !== 'undefined' &&
      typeof valueIn === 'number';
    // (typeof valueIn === 'string' &&
    //   valueIn.endsWith('deg')));

    if (!isValidValue) {
      console.error(
        errorMessage('value in'),
        valueIn,
        rotate,
      );
    }

    return isValidType && isValidValue;
  }
  console.error(errorMessage('array'), rotate);

  return false;
};

const resolveAxis = (
  type?: TRotateType,
): TRotateMotionPropsKey => {
  if (type === 'roll') return 'rotateZ';
  if (type === 'pitch') return 'rotateX';
  if (type === 'yaw') return 'rotateY';
  return 'rotate';
};

export const resolveRotateKey = resolveAxis;
