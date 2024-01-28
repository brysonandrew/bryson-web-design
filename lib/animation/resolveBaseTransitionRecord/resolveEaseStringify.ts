import { TEaseValue } from '@brysonandrew/animation/config/types/transition/base';
import {
  TBezierString,
  TEaseStringify,
} from '@brysonandrew/animation/config/types/transition/base/key';

export const resolveEaseStringify = (
  ease: TEaseValue,
): TEaseStringify<TEaseValue> => {
  if (typeof ease === 'string') {
    return ease;
  }
  return `${ease[0]},${ease[1]},${ease[2]},${ease[3]}` as TBezierString<
    typeof ease
  >;
};
