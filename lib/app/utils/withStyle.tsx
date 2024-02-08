import { MotionStyle } from 'framer-motion';
import { CSSProperties, FC } from 'react';
type TProps = object & {
  style?: CSSProperties | MotionStyle;
};
export const withStyle =
  <T extends TProps>(baseProps: T, C?: FC<T>): FC<T> =>
  (props: T): JSX.Element | null => {
    const { style, ...restProps } = props;
    const { style: baseStyle, ...restBaseProps } =
      baseProps;

    return C ? (
      <C
        {...props}
        style={{ ...style, ...baseStyle }}
        {...restProps}
        {...restBaseProps}
      />
    ) : null;
  };
