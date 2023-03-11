import type { FC } from "react";
import type { TChildren } from "@t/index";
import COLORS from "@windi/config-colors.json";
export const TRACE_LIGHT_ID = "TRACE_LIGHT_ID";

type TProps = {
  children?: TChildren;
};
export const TraceLights: FC<TProps> = () => (
  <filter id={TRACE_LIGHT_ID}>
    <feSpecularLighting
      result="specOut"
      specularConstant="0.6"
      specularExponent="8"
      lightingColor={COLORS["teal-bright-01"]}
    >
      <fePointLight x="0" y="347.5" z="6">
        <animate
          attributeName="x"
          values="-100;2000;"
          dur="10s"
          repeatCount="indefinite"
        />
      </fePointLight>
    </feSpecularLighting>
    <feComposite
      in="SourceGraphic"
      in2="specOut"
      operator="arithmetic"
      k1="0"
      k2="1"
      k3="1"
      k4="0"
    />
  </filter>
);
