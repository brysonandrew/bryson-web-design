

import { TReplacedElement, TElement } from '@brysonandrew/config-types';
import { TDimensions } from '@brysonandrew/config-types';

export const resolveElementDimensions = <
  T extends
    | TReplacedElement
    | TElement
    | TDimensions,
>(
  element: T | null,
) => {
  let width = 0;
  let height = 0;
  if (element) {
    width =
      (element as HTMLImageElement)
        .naturalWidth ??
      (element as TElement)
        .clientWidth ??
      (element as TDimensions).width;
    height =
      (element as HTMLImageElement)
        .naturalHeight ??
      (element as TElement)
        .clientHeight ??
      (element as TDimensions).height;
  }
  if (width > 0 && height > 0) {
    return { width, height };
  }
  return null;
};
