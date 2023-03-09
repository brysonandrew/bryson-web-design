import styled from "@emotion/styled";
import {
  resolveHash,
  resolveUrlId,
} from "src/utils/resolveUrlId";
import { GRADIENT_ID, MASK_BLUR_ID } from "../constants";

const Root = styled.defs``;

export const MaskBlur = () => (
  <Root
    id={MASK_BLUR_ID}
    xmlns="http://www.w3.org/2000/svg"
    width="100"
    height="100"
  >
    <linearGradient
      id={(GRADIENT_ID)}
      x1="0"
      x2="0"
      y1="0"
      y2="1"
      colorInterpolation="sRGB"
      gradientUnits="objectBoundingBox"
    >
      <stop
        offset="0"
        stopColor="#000000"
        stopOpacity="0"
      />
      <stop offset=".2" stopColor="#000000" />
      <stop offset=".55" stopColor="#000000" />
      <stop
        offset="1"
        stopColor="#000000"
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
