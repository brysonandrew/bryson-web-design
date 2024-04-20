import { TEaseValue } from '@brysonandrew/motion-core';
import {
  TBezierString,
  TEaseStringify,
} from '@brysonandrew/motion-core';

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
