import { FC, createElement } from 'react';
import { TSpaceProps } from './config';
import clsx from 'clsx';

export const Space16: FC<TSpaceProps> = ({
  classValue,
  element = 'div',
  ...props
}) =>
  createElement(element, {
    className: clsx('py-16', classValue),
    ...props,
  });
