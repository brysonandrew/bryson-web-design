import { TBaseIconProps } from '@lib/icons/icon';
import { FC } from 'react';

export type TLink = {
  title: string;
  subTitle: string;
  href: string;
  Icon: FC<TBaseIconProps>;
};

export type TLinks = TLink[];
