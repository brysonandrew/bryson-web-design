import { FC, createElement } from 'react';
import { TSpaceProps } from './config';
import clsx from 'clsx';

export const Space32: FC<TSpaceProps> = ({
  classValue,
  element = 'div',
  ...props
}) =>
  createElement(element, {
    className: clsx('p-32', classValue),
    ...props,
  });
