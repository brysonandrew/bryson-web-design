import type { SVGProps } from "react";
import type { SVGMotionProps } from "framer-motion";
import type { ClassValue } from "clsx";

export type TBaseIconProps = SVGProps<SVGSVGElement> & {
  classValue?: ClassValue;
};

export type TBaseIconMotionProps =
  SVGMotionProps<SVGSVGElement> & {
    classValue?: ClassValue;
  };
