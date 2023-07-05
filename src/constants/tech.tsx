import { React } from '@components/icons/React';
import { Typescript } from '@components/icons/Typescript';
import type { TBaseIconProps } from '@t/icons';
import { HTMLMotionProps } from 'framer-motion';
import type { FC } from 'react';

export type TItem = HTMLMotionProps<'div'> & {
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
};

// export const ITEMS: TItem[] = [TECH.REACT, TECH.TYPESCRIPT];
