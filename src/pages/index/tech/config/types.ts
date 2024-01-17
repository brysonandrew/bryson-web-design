import { TBaseIconProps } from '@lib/icons/type';
import { TDivMotionProps } from '@lib/types/dom/motion';
import type { FC } from 'react';

export type TItem = TDivMotionProps & {
  title: string;
  href: string;
  Icon: FC<TBaseIconProps>;
};
