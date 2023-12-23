import { React } from '@components/icons/tech/React';
import { Typescript } from '@components/icons/tech/Typescript';
import { TDivMotionProps } from '@t/dom';
import type { TBaseIconProps } from '@t/icons';
import type { FC } from 'react';

export type TItem = TDivMotionProps & {
  title: string;
  href: string;
  Icon: FC<TBaseIconProps>;
};

export const TECH = {
  REACT: {
    title: 'React',
    href: 'https://reactjs.org/',
    Icon: React,
  },
  TYPESCRIPT: {
    title: 'Typescript',
    href: 'https://www.typescriptlang.org/',
    Icon: Typescript,
  },
} as const;
