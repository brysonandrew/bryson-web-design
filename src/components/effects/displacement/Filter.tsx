import { motion } from "framer-motion";
import type { FC } from "react";
import type { TFilterProps } from "../types";
import { INTENSITY, TURBULANCE_DEFAULTS } from "./config";
import type { TDisplacementProps } from "./config";

const BASE_ANIMATION = {
  repeatCount: "indefinite",
  dur: "10s",
};

export const Filter: FC<
  TFilterProps & TDisplacementProps
> = ({
  external,
  children,
  intensity = INTENSITY,
  id,
  source = id,
  result = id,
  ...props
}) => (
  <>
    <motion.feTurbulence
      {...TURBULANCE_DEFAULTS}
      type="turbulence"
      in={source}
      result={`${id}-turbulence`}
      {...props}
    >
      <animate
        attributeName="baseFrequency"
        values="0 1;0 2;0 1"
        {...BASE_ANIMATION}
      />
      <animate
        attributeName="numOctaves"
        values="2;0;2"
        {...BASE_ANIMATION}
      />
    </motion.feTurbulence>
    <motion.feMorphology
      in={`${id}-turbulence`}
      operator="erode"
      radius="6"
      result={`${id}-morph`}
    >
      <animate
        attributeName="radius"
        values="6;8;6"
        {...BASE_ANIMATION}
      />
    </motion.feMorphology>
    <feOffset
      in={source}
      dx={-intensity * 0.5}
      dy={-intensity * 0.5}
      result="offset"
    >
      <animate
        attributeName="dx"
        values={`${-intensity * 0.25};${-intensity * 0.5};${
          -intensity * 0.25
        }`}
        {...BASE_ANIMATION}
      />
      <animate
        attributeName="dy"
        values={`${-intensity * 0.25};${-intensity * 0.5};${
          -intensity * 0.25
        }`}
        {...BASE_ANIMATION}
      />
    </feOffset>
    <feDisplacementMap
      in2={`${id}-morph`}
      in="offset"
      scale={intensity}
      xChannelSelector="R"
      yChannelSelector="G"
      result={"DISPLACEMENT"}
    >
      <animate
        attributeName="scale"
        values={`${intensity * 0.5};${intensity};${
          intensity * 0.5
        }`}
        {...BASE_ANIMATION}
      />
    </feDisplacementMap>
    {/*  
    <feComposite
      in="DISPLACEMENT"
      in2="BLUR"
      result={result}
      operator="arithmetic"
      k1="0"
      k2="0.1"
      k3="0.8"
      k4="0"
    /> */}
    {children && children(result)}
  </>
);
