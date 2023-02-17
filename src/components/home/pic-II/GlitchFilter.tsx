import { GLITCH_FILTER_II } from "@constants/keys";
import type { SVGAttributes, FC } from "react";

type TProps = {
  children: JSX.Element;
} & SVGAttributes<SVGElement>;
export const GlitchFilter: FC<TProps> = ({
  children,
  ...props
}) => (
  <svg viewBox="0 0 294 268" {...props}>
    <filter id={GLITCH_FILTER_II}>
      <feTurbulence
        in="SourceGraphic"
        baseFrequency="0.0 0.4"
        numOctaves="2"
        result="t"
      />
      <feMorphology
        in="t"
        operator="dilate"
        radius="1"
        result="fatty"
      />
      <feDisplacementMap
        in2="fatty"
        in="SourceGraphic"
        scale="60"
        xChannelSelector="R"
        yChannelSelector="G"
        result="displacement"
      />
      <feOffset in="displacement" dx="-12" dy="-10" />
    </filter>
    {children}
  </svg>
);
