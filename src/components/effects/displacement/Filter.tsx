import { motion } from "framer-motion";
import type { FC } from "react";
import type { TFilterProps } from "../types";
import { INTENSITY, TURBULANCE_DEFAULTS } from "./config";
import type { TDisplacementProps } from "./config";

const BASE_ANIMATION = {
  dur: "10s",
  repeatCount: "indefinite",
  // restart: "always",
  // repeatDur: "1s",
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
        values="0 2;0 10;0 2"
        {...BASE_ANIMATION}
      />
      {/* <animate
        attributeName="numOctaves"
        values="0;4;0"
        {...BASE_ANIMATION}
      />
      <animate
        attributeName="seed"
        values="0;4;0"
        {...BASE_ANIMATION}
      /> */}
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
      in="SourceGraphic"
      dx={-intensity * 0.5}
      dy={-intensity * 0.5}
      result="offset"
    >
      <animate
        attributeName="dx"
        values={`0;${-intensity * 0.5};0`}
        {...BASE_ANIMATION}
      />
      <animate
        attributeName="dy"
        values={`0;${-intensity * 0.5};0`}
        {...BASE_ANIMATION}
      />
    </feOffset>
    <feDisplacementMap
      in2={`${id}-morph`}
      in="offset"
      scale={intensity}
      xChannelSelector="R"
      yChannelSelector="G"
      result={result}
    >
      <animate
        attributeName="scale"
        values={`0;${intensity};0`}
        {...BASE_ANIMATION}
      />
    </feDisplacementMap>
    {/* <feGaussianBlur
        in={`${id}-map`}
        stdDeviation="10 0"
      /> */}
    {/* <feFlood
        floodColor="#000"
        in={`${id}-turbulence`}
        result={`${id}-flood`}
      />
      <feComposite
        in={`${id}-flood`}
        in2={`${id}-map`}
        operator="xor"
        result={id}
      /> */}
    {/* <feComposite
            in2="SourceGraphic"
            in={filterId}
            operator="arithmetic"
            k1="0"
            k2="1"
            k3="1"
          /> */}
    {children && children(result)}
  </>
);
