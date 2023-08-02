import { TBaseIconProps } from '@t/icons';
import { FC } from 'react';

export type TLink = {
  title: string;
  subTitle: string;
  href: string;
  Icon: FC<TBaseIconProps>;
};

export type TLinks = TLink[];
