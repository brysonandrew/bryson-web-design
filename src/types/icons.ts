import type { FC, SVGProps } from 'react';
import type { SVGMotionProps } from 'framer-motion';
import { TClassValueProps } from '.';

export type TBaseIconProps = SVGProps<SVGSVGElement> &
  TClassValueProps;

export type TBaseIconMotionProps =
  SVGMotionProps<SVGSVGElement> & TClassValueProps;

export type TIconComponent = FC<TBaseIconProps>;
