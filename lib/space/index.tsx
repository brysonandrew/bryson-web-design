import { FC, createElement } from 'react';
import { clsx } from 'clsx';
import { TAmount, TSpaceProps } from '@brysonandrew/space';

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

export * from './P1';
export * from './P12';
export * from './P12Y';
export * from './P16Y';
export * from './P1_5';
export * from './P2';
export * from './P24Y';
export * from './P3';
export * from './P32Y';
export * from './P4';
export * from './P48Y';
export * from './P6';
export * from './P60Y';
export * from './P72Y';
export * from './P8';
export * from './P86Y';
export * from './P_25';
export * from './P_5';
export * from './PersistHeight';
export * from './Rect';
export * from './TitleSpace';
export * from './config';