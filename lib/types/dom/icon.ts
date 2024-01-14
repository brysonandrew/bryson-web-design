import type { FC, SVGProps } from 'react';
import type { SVGMotionProps } from 'framer-motion';
import { TClassValueProps } from './main';
import { IconProps } from '@iconify/react';

export type TBaseIconProps = SVGProps<SVGSVGElement> &
  TClassValueProps;

export type TBaseIconMotionProps =
  SVGMotionProps<SVGSVGElement> & TClassValueProps;

export type TIconComponent = FC<TBaseIconProps>;


export type TIconConfig = IconProps &
  TClassValueProps;
export type TIconConfigProps = {
  iconConfig: TIconConfig;
};
