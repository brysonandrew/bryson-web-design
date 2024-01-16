import { TBaseIconProps } from '@lib/icons/type';
import { FC } from 'react';

export type TLink = {
  title: string;
  subTitle: string;
  href: string;
  Icon: FC<TBaseIconProps>;
};

export type TLinks = TLink[];
