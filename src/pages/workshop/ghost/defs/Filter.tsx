import styled from "@emotion/styled";
import {
  FILTER_ID,
  MASK_BLUR_ID,
  MASK_DISPLACE_ID,
  MASK_TEXT_ID,
} from "../constants";
import { resolveHash } from "src/utils/resolveUrlId";
const Root = styled.filter``;

type TConfig = { id: string };
export const Filter = ({ id }: TConfig) => (
  <Root
    id={id}
    x="0"
    y="0"
    width="100%"
    height="100%"
    colorInterpolationFilters="sRGB"
    preserveAspectRatio="none"
  >
    {/* <!-- Creating three color versions of the input text: --> */}
    <feFlood
      floodColor="#FF50F6"
      floodOpacity="0.8"
      result="PINK"
    />
    <feFlood
      floodColor="#43FFFF"
      floodOpacity="0.8"
      result="CYAN"
    />
    <feFlood
      floodColor="#9C00FF"
      floodOpacity="0.8"
      result="VIOLET"
    />
    <feComposite
      operator="in"
      in="PINK"
      in2="SourceAlpha"
      result="PINK_TEXT"
    />
    <feComposite
      operator="in"
      in="CYAN"
      in2="SourceAlpha"
      result="CYAN_TEXT"
    />
    <feComposite
      operator="in"
      in="VIOLET"
      in2="SourceAlpha"
      result="VIOLET_TEXT"
    />

    {/* <!-- Offsetting every instance of couloured text: --> */}
    <feOffset
      in="PINK_TEXT"
      dx="-15"
      dy="5"
      result="PINK_TEXT_OFF"
    />
    <feOffset
      in="CYAN_TEXT"
      dx="0"
      dy="7"
      result="CYAN_TEXT_OFF"
    />
    <feOffset
      in="VIOLET_TEXT"
      dx="15"
      dy="3"
      result="VIOLET_TEXT_OFF"
    />

    {/* <!-- Blending the first two colors: --> */}
    <feBlend
      in="PINK_TEXT_OFF"
      in2="CYAN_TEXT_OFF"
      result="BLEND_PC"
      mode="screen"
    />

    {/* <!-- Blending the third color: --> */}
    <feBlend
      in="BLEND_PC"
      in2="VIOLET_TEXT_OFF"
      result="BLEND_ALL"
      mode="normal"
    />

    {/* <!-- Merging the original filter input (the text) and the 3 color versions --> */}
    <feMerge result="MERGE_ALL">
      <feMergeNode in="BLEND_ALL" />
      <feMergeNode in="SourceGraphic" />
    </feMerge>

    {/* <!-- A bitmap that will be the displacment map. Href value will be set by javascript, bcs. CORS and this way we can decide wether to feed a WebP image to newer browsers. --> */}
    {/* <feImage
      id="feimage-map"
      href=""
      data-map="https://assets.codepen.io/100347/fedm_vertical-map"
      width="100%"
      height="1936"
      x="0"
      y="-1536"
      result="MAP"
      preserveAspectRatio="none"
    >
      <animate
        attributeName="y"
        values="-1536;0;"
        dur="10s"
        repeatCount="1000"
      />
    </feImage> */}
    {/* <feTurbulence type="turbulence" result="MAP" /> */}

    {/* <!-- A linear gradient. We will use it as a mask to fade out the text at the bottom --> */}
    <feImage
      href={resolveHash(MASK_TEXT_ID)}
      x="0"
      y="0"
      width="100%"
      height="51%"
      result="MASK_TEXT"
      preserveAspectRatio="none"
    />

    {/* <!-- One more linear gradient. This one will be used to fade out the "drip" at the top. This way we achieve a smotth transition from the text to the blurry dripping part.  --> */}
    <feImage
      href={resolveHash(MASK_BLUR_ID)}
      x="0"
      y="35%"
      width="100%"
      height="60%"
      result="MASK_BLUR"
      preserveAspectRatio="none"
    />

    {/* <!-- And one last SVG image containing a linear gradient from rgba(128, 0, 128, 1) to rgba(128, 0, 128, 0). We will merge this with the animated displacement image, so that the displacement effect will increase gradually form zero at the top to its full extend at the end of the gradient. --> */}
    <feImage
      href={resolveHash(MASK_DISPLACE_ID)}
      x="0"
      y="40%"
      width="100%"
      height="20%"
      result="MASK_DISPLACE"
      preserveAspectRatio="none"
    />

    {/* <!-- Merging the animated image and the gradient.  --> */}
    {/* <feMerge result="MERGE_MASK">
      <feMergeNode in="MAP" />
      <feMergeNode in="MASK_DISPLACE" />
    </feMerge> */}

    {/* <!-- Using the output of the merge to create a displacement map filter primitive: --> */}
    <feDisplacementMap
      in="MERGE_ALL"
      in2="MASK_DISPLACE"
      result="DISPLACE_MERGE"
      scale="-300"
      xChannelSelector="R"
      yChannelSelector="B"
    />

    <feGaussianBlur
      in="DISPLACE_MERGE"
      stdDeviation="6"
      result="BLUR_DISPLACE"
    />

    <feComposite
      in2="MASK_BLUR"
      in="BLUR_DISPLACE"
      operator="lighter"
      result="COMP_DISPLACE"
    />

    {/* <feMerge result="MERGE">
      <feMergeNode in="COMP_DISPLACE" />
      <feMergeNode in="SourceGraphic" />
    </feMerge> */}
    {/* <feComposite
      in2="MASK_TEXT"
      in="SourceGraphic"
      operator="in"
      result="COMP_SOURCE"
    /> */}

    {/* <feMerge result="MERGE">
      <feMergeNode in="COMP_DISPLACE" />
      <feMergeNode in="COMP_SOURCE" />
    </feMerge> */}
  </Root>
);
