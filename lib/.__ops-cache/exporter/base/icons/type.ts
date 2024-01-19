import type { FC, SVGProps } from 'react';
import { TClassValueProps } from '../types/dom/main';
import { IconProps } from '@iconify/react';
import { TSvgMotionProps } from '@brysonandrew/base/types/dom/motion';

export type TBaseIconProps = SVGProps<SVGSVGElement> &
  TClassValueProps;

export type TBaseIconMotionProps = TSvgMotionProps &
  TClassValueProps;

export type TIconComponent = FC<TBaseIconProps>;

export type TIconConfig = IconProps & TClassValueProps;
export type TIconConfigProps = {
  iconConfig: TIconConfig;
};
