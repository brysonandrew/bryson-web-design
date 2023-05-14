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
  begin,
  ...props
}) => {
  const baseAnimation = { ...BASE_ANIMATION, begin };
  return (
    <>
      <feTurbulence
        {...TURBULANCE_DEFAULTS}
        type="turbulence"
        in={source}
        result={`${id}-turbulence`}
        {...props}
      >
        <animate
          attributeName="baseFrequency"
          values="0 1;0 2;0 1"
          {...baseAnimation}
        />
        <animate
          attributeName="numOctaves"
          values="2;0;2"
          {...baseAnimation}
        />
      </feTurbulence>
      <feMorphology
        in={`${id}-turbulence`}
        operator="erode"
        radius="6"
        result={`${id}-morph`}
      >
        <animate
          attributeName="radius"
          values="6;8;6"
          {...baseAnimation}
        />
      </feMorphology>
      <feOffset
        in={source}
        dx={-intensity * 0.5}
        dy={-intensity * 0.5}
        result="offset"
      >
        <animate
          attributeName="dx"
          values={`${-intensity * 0.25};${
            -intensity * 0.5
          };${-intensity * 0.25}`}
          {...baseAnimation}
        />
        <animate
          attributeName="dy"
          values={`${-intensity * 0.25};${
            -intensity * 0.5
          };${-intensity * 0.25}`}
          {...baseAnimation}
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
          {...baseAnimation}
        />
      </feDisplacementMap>
      {children && children(result)}
    </>
  );
};
