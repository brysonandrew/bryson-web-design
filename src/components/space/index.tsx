import { FC, createElement } from 'react';
import { clsx } from 'clsx';
import { TSpaceProps } from './config';

type TAmount =
  | '0.25'
  | '0.5'
  | '1'
  | '2'
  | '3'
  | '4'
  | '6'
  | '8'
  | '12'
  | '16'
  | '24'
  | '48'
  | '60';

type TProps = TSpaceProps & {
  spaceClass: `p-${TAmount}` | `py-${TAmount}`;
};
export const Space: FC<TProps> = ({
  element = 'div',
  spaceClass,
  classValue,
  children,
  ...props
}) => {
  return createElement(
    element,
    { className: clsx(spaceClass, classValue), ...props },
    children,
  );
};
