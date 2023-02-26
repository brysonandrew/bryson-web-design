import { FC } from "react";

const BASE_ANIMATION = {
  dur: "6s",
  repeatCount: "indefinite",
};

type TProps = {
  intensity?: number;
  id: string;
};
export const Pool: FC<TProps> = ({
  id,
  intensity = 120,
}) => {
  return (
    <filter
      id={id}
      x="0"
      y="0"
      width="100%"
      height="100%"
      colorInterpolationFilters="sRGB"
    >
      <feTurbulence
        in="SourceGraphic"
        baseFrequency="10"
        type="turbulence"
        numOctaves="4"
        result="MERGE_IMG"
      >
        <animate
          attributeName="baseFrequency"
          values="0.01;0.1;0.01"
          {...BASE_ANIMATION}
        />
      </feTurbulence>
      <feOffset
        in="SourceGraphic"
        dx={-intensity * 0.5}
        dy={-intensity * 0.5}
        result="OFFSET"
      >
        <animate
          attributeName="dx"
          values={`${-intensity * 0.25};${
            -intensity * 0.5
          };${-intensity * 0.25}`}
          {...BASE_ANIMATION}
        />
        <animate
          attributeName="dy"
          values={`${-intensity * 0.25};${
            -intensity * 0.5
          };${-intensity * 0.25}`}
          {...BASE_ANIMATION}
        />
      </feOffset>
      <feDisplacementMap
        in="OFFSET"
        in2="MERGE_IMG"
        scale={`${intensity * 0.5}`}
        xChannelSelector="B"
        yChannelSelector="G"
        result="DISPLACEMENT"
      >
        <animate
          attributeName="scale"
          values={`${intensity * 0.5};${intensity};${
            intensity * 0.5
          }`}
          {...BASE_ANIMATION}
        />
      </feDisplacementMap>
      <feGaussianBlur
        in="DISPLACEMENT"
        stdDeviation="0 1.3"
      >
          <animate
          attributeName="baseFrequency"
          values="0 0.7;0 1.3;0 0.7"
          {...BASE_ANIMATION}
        />
      </feGaussianBlur>
    </filter>
  );
};
