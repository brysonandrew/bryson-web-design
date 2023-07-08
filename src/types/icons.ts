import type { FC, SVGProps } from "react";
import type { SVGMotionProps } from "framer-motion";
import type { ClassValue } from "clsx";
import { TClassValueProps } from ".";

export type TBaseIconProps = SVGProps<SVGSVGElement> & {
  classValue?: ClassValue;
};

export type TBaseIconMotionProps =
  SVGMotionProps<SVGSVGElement> & TClassValueProps;

export type TIconComponent = FC<TBaseIconProps>;
