import { TBaseIconProps } from '@brysonandrew/base/icons/type';
import { TDivMotionProps } from '@brysonandrew/base/types/dom/motion';
import type { FC } from 'react';

export type TItem = TDivMotionProps & {
  title: string;
  href: string;
  Icon: FC<TBaseIconProps>;
};
