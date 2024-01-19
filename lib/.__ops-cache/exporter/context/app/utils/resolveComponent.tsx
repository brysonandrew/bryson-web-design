import { CSSProperties, FC } from 'react';
import { TBlankProps } from '../config/types';

export const resolveComponent =
  <T extends TBlankProps = TBlankProps>(
    style: CSSProperties,
    C?: FC<T>,
  ) =>
  (props: T) =>
    C ? (
      <C {...props} style={{ ...style, ...props.style }} />
    ) : null;
