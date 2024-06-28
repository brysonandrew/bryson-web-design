import { METAL_RADIAL_GRADIENT_CENTER } from '@brysonandrew/texture-metal/center';
import { METAL_CONICAL_GRADIENT } from '@brysonandrew/texture-metal/conical';
import { METAL_LINEAR_GRADIENT } from '@brysonandrew/texture-metal/linear';
import { css } from '@emotion/react';

export const METAL_RADIAL_GRADIENT_CSS = `${METAL_LINEAR_GRADIENT},${METAL_RADIAL_GRADIENT_CENTER};
`;

export const metalConicalCss = css`
  &:before,
  &:after {
    content: '';
    top: 0;
    left: 0;
    position: absolute;
    width: inherit;
    height: inherit;
    border-radius: inherit;
    pointer-events: none;
    /* fake conical gradients */
    background-image: ${METAL_CONICAL_GRADIENT};
  }
  &:before {
    transform: rotate(65deg);
  }
  &:after {
    transform: rotate(-65deg);
  }
`;

const baseRadialMetalCss = css`
  background-image: ${METAL_RADIAL_GRADIENT_CSS};
  ${metalConicalCss}
`;

export const metalRadialCss = css`
  ${baseRadialMetalCss}
  filter: brightness(100%);
`;

export const metalRadialLightCss = css`
  ${baseRadialMetalCss}
  filter: brightness(90%) opacity(10%);
`;

export const metalRadialDarkCss = css`
  ${baseRadialMetalCss}
  filter: brightness(16%) opacity(100%);
`;
