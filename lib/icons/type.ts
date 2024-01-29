import type { FC, SVGProps } from 'react';
import type { IconProps } from '@iconify/react';
import type { TSvgMotionProps } from '@brysonandrew/types/dom/motion';
import type { TClassValueProps } from '@brysonandrew/types';

export type TBaseIconProps = SVGProps<SVGSVGElement> &
  TClassValueProps;

export type TBaseIconMotionProps = TSvgMotionProps &
  TClassValueProps;

export type TIconComponent = FC<TBaseIconProps>;

export type TIconConfig = IconProps & TClassValueProps;
export type TIconConfigProps = {
  iconConfig: TIconConfig;
};
