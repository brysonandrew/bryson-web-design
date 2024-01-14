import { TBaseIconProps } from '@lib/types/dom/icon';
import { FC } from 'react';

export type TLink = {
  title: string;
  subTitle: string;
  href: string;
  Icon: FC<TBaseIconProps>;
};

export type TLinks = TLink[];
