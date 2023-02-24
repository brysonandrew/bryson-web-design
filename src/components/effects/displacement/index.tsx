import { FC } from "react";
import { motion } from "framer-motion";
import { INTENSITY } from "./config";
import { TBaseNoiseProps } from "./config";
import { TFilterChildrenProps } from "../types";

export const ID = "DisplacementId";
type TChildrenProps = TFilterChildrenProps<typeof ID>;
type TProps = TChildrenProps &
  TBaseNoiseProps & {
    numOctaves: number[];
  };
export const Displacement: FC<TProps> = ({
  baseFrequency,
  numOctaves,
  children,
  ...turbulenceTransition
}) => (
  <filter id={ID}>
    <motion.feTurbulence
      type="turbulence"
      in="SourceGraphic"
      baseFrequency={`0 ${baseFrequency}`}
      animate={{ numOctaves }}
      transition={{
        repeat: Infinity,
        ...turbulenceTransition,
      }}
      result="turbulence"
    />
    <motion.feMorphology
      in="turbulence"
      operator="erode"
      radius="0.1"
      result="skinny"
    />
    <feOffset
      in="SourceGraphic"
      dx={INTENSITY}
      dy={INTENSITY}
      result="offset"
    />
    <feDisplacementMap
      in2="skinny"
      in="offset"
      scale={INTENSITY}
      xChannelSelector="R"
      yChannelSelector="G"
      result={ID}
    />
    {children && children(ID)}
  </filter>
);
