import { MotionStyle } from 'framer-motion';
import { CSSProperties, FC } from 'react';
type TProps = object & {
  style?: CSSProperties | MotionStyle;
};
export const resolveComponent =
  <T extends TProps>(
    style: CSSProperties,
    C?: FC<T>,
  ): FC<T> =>
  (props: T): JSX.Element | null =>
    C ? (
      <C {...props} style={{ ...style, ...props.style }} />
    ) : null;
