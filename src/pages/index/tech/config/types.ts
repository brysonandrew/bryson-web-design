import { TDivMotionProps } from '@lib/types/dom';
import type { TBaseIconProps } from '@lib/icons/icon';
import type { FC } from 'react';


export type TItem = TDivMotionProps & {
  title: string;
  href: string;
  Icon: FC<TBaseIconProps>;
};