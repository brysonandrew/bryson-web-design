import { TDivMotionProps } from '@t/dom';
import type { TBaseIconProps } from '@t/icons';
import type { FC } from 'react';


export type TItem = TDivMotionProps & {
  title: string;
  href: string;
  Icon: FC<TBaseIconProps>;
};