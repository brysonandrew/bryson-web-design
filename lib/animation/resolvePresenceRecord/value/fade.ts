import { TFade } from '@brysonandrew/animation/config/types/presence/config';

export const isValidFade = (
  fade?: TFade,
): fade is TFade => {
  const errorMessage = "Invalid 'fade' animation value.";

  if (Array.isArray(fade)) {
    return true;
  }
  console.log(errorMessage, 'non-array found');
  return false;
};
