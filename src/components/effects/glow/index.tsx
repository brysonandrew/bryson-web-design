import type { FC } from "react";
import { motion } from "framer-motion";
import COLORS from "@windi/config-colors.json";
import type { TFilterChildrenProps } from "../types";
import { HEIGHT, WIDTH } from "../constants";

export const ID = "EdgesId";
type TProps = TFilterChildrenProps<typeof ID>;
export const Filter: FC<TProps> = ({
  children,
  external,
}) => (
  <>
    <filter
      id={ID}
      x={0}
      y={0}
      height={HEIGHT}
      width={WIDTH}
      filterUnits="userSpaceOnUse"
    >
      <motion.feMorphology
        operator="dilate"
        radius="1"
        in="SourceAlpha"
        result="fatty"
      />
      <feGaussianBlur
        in="fatty"
        stdDeviation="10"
        result="blur"
      />
      <motion.feFlood
        floodColor={COLORS["teal-bright"]}
        result="color"
      />
      <feComposite
        in="color"
        in2="blur"
        operator="in"
        result="glow"
      />
      <feMerge>
        <feMergeNode in="glow" />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
      {children && children(ID)}
    </filter>
    {external && external(ID)}
  </>
);
