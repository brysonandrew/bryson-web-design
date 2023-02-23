import { motion } from "framer-motion";
import { FC } from "react";
import { INTENSITY } from "./config";
import { TBaseNoiseProps } from "./config";
import { TChildren } from "@t/index";

export const RESULT_ID = "DISPLACEMENT_RESULT_ID";

type TProps = TBaseNoiseProps & {
  numOctaves: number[];
  children(result: typeof RESULT_ID): TChildren;
};
export const Displacement: FC<TProps> = ({
  baseFrequency,
  numOctaves,
  children,
  ...turbulenceTransition
}) => (
  <>
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
      result={RESULT_ID}
    />
    {children(RESULT_ID)}
  </>
);
