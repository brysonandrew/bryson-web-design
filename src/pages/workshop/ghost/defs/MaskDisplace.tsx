import styled from "@emotion/styled";
import { resolveUrlId } from "@utils/resolveUrlId";
import {
  GRADIENT_ID,
  MASK_DISPLACE_ID,
} from "../constants";

const Root = styled.svg``;

export const MaskDisplace = () => (
  <Root
    id={MASK_DISPLACE_ID}
    xmlns="http://www.w3.org/2000/svg"
    width="100"
    height="100"
  >
    <linearGradient
      id={GRADIENT_ID}
      x1="0"
      x2="0"
      y1="0"
      y2="1"
      colorInterpolation="sRGB"
      gradientUnits="objectBoundingBox"
    >
      <stop offset="0" stopColor="rgb(127,0,127)" />
      <stop
        offset="1"
        stopColor="rgb(127,0,127)"
        stopOpacity="0"
      />
    </linearGradient>
    <rect
      width="100%"
      height="100%"
      fill={resolveUrlId(GRADIENT_ID)}
    />
  </Root>
);
