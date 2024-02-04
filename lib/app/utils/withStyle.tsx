import { MotionStyle } from 'framer-motion';
import { CSSProperties, FC } from 'react';
type TProps = object & {
  style?: CSSProperties | MotionStyle;
};
export const withStyle =
  <T extends TProps>(
    style: CSSProperties,
    C?: FC<T>,
  ): FC<T> =>
  (props: T): JSX.Element | null => {
    return C ? (
      <C {...props} style={{ ...style, ...props.style }} />
    ) : null;
  };
