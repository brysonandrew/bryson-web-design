import { TFade } from '@brysonandrew/motion-config-types';

export const isValidFade = (
  fade?: TFade,
): fade is TFade => {
  if (typeof fade === 'undefined') return false;

  const errorMessage = "Invalid 'fade' animation value.";

  if (Array.isArray(fade)) {
    return true;
  }
  console.log(errorMessage, 'non-array found');
  return false;
};
