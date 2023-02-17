import type { FC, SVGAttributes } from "react";
import {
  GLITCH_FILTER_I_I,
  GLITCH_FILTER_I_II,
  GLITCH_FILTER_I_III,
} from "@constants/keys";

const OFFSET = 0.2;
const MORPH_RADIUS = 2;

type TProps = {
  children: JSX.Element;
} & SVGAttributes<SVGElement>;
export const GlitchFilter: FC<TProps> = ({
  children,
  ...props
}) => (
  <svg viewBox="0 0 294 268" {...props}>
    <defs>
      <filter
        id={GLITCH_FILTER_I_I}
        x={`-${OFFSET}%`}
        y={`-${OFFSET}%`}
        width={`${100 + OFFSET}%`}
        height={`${100 + OFFSET}%`}
        filterUnits="objectBoundingBox"
        primitiveUnits="userSpaceOnUse"
        colorInterpolationFilters="linearRGB"
      >
        <feColorMatrix
          in="SourceGraphic"
          type="saturate"
          values="0.10"
          result="grey"
        />

        <feMorphology
          operator="dilate"
          radius={`${MORPH_RADIUS * 1.4} 0`}
          x="0%"
          y="0%"
          width="100%"
          height="100%"
          in="grey"
          result="morphology1"
        />
      </filter>
      <filter
        id={GLITCH_FILTER_I_II}
        x={`-${OFFSET}%`}
        y={`-${OFFSET}%`}
        width={`${100 + OFFSET}%`}
        height={`${100 + OFFSET}%`}
        filterUnits="objectBoundingBox"
        primitiveUnits="userSpaceOnUse"
        colorInterpolationFilters="linearRGB"
      >
        <feColorMatrix
          in="SourceGraphic"
          type="saturate"
          values="0.10"
          result="grey"
        />
        <feMorphology
          operator="dilate"
          radius={`${MORPH_RADIUS} 0`}
          x="0%"
          y="0%"
          width="100%"
          height="100%"
          in="grey"
          result="morphology1"
        />
      </filter>
      <filter
        id={GLITCH_FILTER_I_III}
        x={`-${OFFSET}%`}
        y={`-${OFFSET}%`}
        width={`${100 + OFFSET}%`}
        height={`${100 + OFFSET}%`}
        filterUnits="objectBoundingBox"
        primitiveUnits="userSpaceOnUse"
        colorInterpolationFilters="linearRGB"
      >
        <feColorMatrix
          in="SourceGraphic"
          type="saturate"
          values="0.10"
          result="grey"
        />
        <feMorphology
          operator="dilate"
          radius={`${MORPH_RADIUS * 1.2} 0`}
          x="0%"
          y="0%"
          in="grey"
          width="100%"
          height="100%"
          result="morphology1"
        />
      </filter>
    </defs>
    {children}
  </svg>
);
