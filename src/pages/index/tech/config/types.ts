import { TBaseIconProps } from '@brysonandrew/lib/icons/type';
import { TDivMotionProps } from '@brysonandrew/lib/types/dom/motion';
import type { FC } from 'react';

export type TItem = TDivMotionProps & {
  title: string;
  href: string;
  Icon: FC<TBaseIconProps>;
};
