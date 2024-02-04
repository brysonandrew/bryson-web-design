import { TBaseIconProps } from '@brysonandrew/icons/type';
import { TDivMotionProps } from '@brysonandrew/config-types/dom/motion';
import type { FC } from 'react';

export type TItem = TDivMotionProps & {
  title: string;
  href: string;
  Icon: FC<TBaseIconProps>;
};
