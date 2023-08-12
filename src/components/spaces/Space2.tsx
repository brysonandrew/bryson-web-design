import { FC, createElement } from 'react';
import { TSpaceProps } from './config';
import clsx from 'clsx';

export const Space2: FC<TSpaceProps> = ({
  element = 'div',
  classValue,
  ...props
}) =>
  createElement(element, {
    className: clsx('p-2', classValue),
    ...props,
  });
