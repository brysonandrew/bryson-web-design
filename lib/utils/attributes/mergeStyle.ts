import { CSSProperties } from '@emotion/serialize';
import { TElementProps } from '@brysonandrew/types/dom';

export const mergeStyle = <
  P extends TElementProps = TElementProps,
>(
  props: P,
  style: CSSProperties,
) => ({
  ...props,
  style: {
    ...props.style,
    ...style,
  },
});
