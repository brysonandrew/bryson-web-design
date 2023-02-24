import type { FC } from "react";
import { HEIGHT, WIDTH, EDGES_ID } from ".";
const DURATION = 10;

export const Filter: FC = () => (
  <filter
    id={EDGES_ID}
    x={0}
    y={0}
    height={HEIGHT}
    width={WIDTH}
    filterUnits="userSpaceOnUse"
    colorInterpolationFilters="sRGB"
  >
    <>
      {/* <!-- Convert to greyscale --> */}
      <feColorMatrix type="saturate" values="0">
        {/* <animate
          attributeName="values"
          values="0;1;0"
          dur={`1s`}
          repeatCount="indefinite"
        /> */}
        {/* <animate
          attributeName="y"
          values="0;100%;0"
          dur={`10s`}
          repeatCount="indefinite"
        /> */}
      </feColorMatrix>
      {/* <!-- Threshhold to black or white --> */}
      <feComponentTransfer>
        <feFuncR
          type="discrete"
          tableValues="0 0 0 0 0 1"
        />
        <feFuncG
          type="discrete"
          tableValues="0 0 0 0 0 1"
        />
        <feFuncB
          type="discrete"
          tableValues="0 0 0 0 0 1"
        />
      </feComponentTransfer>
      {/* <!-- Morphology filter to "erode" (shrink) the white areas --> */}
      <feMorphology operator="erode" radius="0">
        {/* <animate
          attributeName="radius"
          values="0;8;0"
          dur={`${DURATION}s`}
          repeatCount="indefinite"
        /> */}
      </feMorphology>
      {/* <!-- Blur to cause image to "spread" --> */}
      <feGaussianBlur stdDeviation="10">
        {/* <animate
          attributeName="stdDeviation"
          values="0;8;0"
          dur={`${DURATION}s`}
          repeatCount="indefinite"
        /> */}
      </feGaussianBlur>
      {/* <!-- High contrast to threshhold again -->
      <!-- But this time we switch black and white as we -->
      <!-- will use this as an alpha mask in the next steps -->
      <!-- We only need one channel here --> */}
      <feComponentTransfer>
        <feFuncR
          type="discrete"
          tableValues="1 1 1 1 1 0"
        />
      </feComponentTransfer>
      {/* <!-- Convert the the red channel of this to an alpha channel -->
      <!-- The result is a black shape with an alpha mask of the right shape --> */}
      <feColorMatrix
        type="matrix"
        result="alpha-mask"
        values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0 1 0 0 0 0"
      />
      {/* <!-- Create a blank white rectangle --> */}
      <feFlood
        floodColor="black"
        floodOpacity={0.5}
        result="white-flood"
      />
      {/* <!-- Layer 1: Mask the blank white fill with the alpha mask we created earlier --> */}
      <feComposite
        in="white-flood"
        in2="alpha-mask"
        operator="in"
        result="masked-white"
      />
      {/* <!-- Layer 2: Grow the black shape to create our black outline "stroke" --> */}
      <feMorphology
        in="alpha-mask"
        operator="dilate"
        radius="1"
        result="black-stroke"
      >
        <animate
          attributeName="radius"
          values="1;0;1"
          dur={`${DURATION}s`}
          repeatCount="indefinite"
        />
      </feMorphology>
      {/* <!-- Layer 3: Create a shadow to go at the back --> */}
      <feGaussianBlur in="alpha-mask" stdDeviation="10" />
      <feOffset dx="5" dy="5" result="offset-blur" />
      <feFlood floodColor="#fff" floodOpacity="0.6" />
      {/* <!-- Lighten the shadow a little --> */}
      <feComposite
        in="SourceGraphic"
        in2="offset-blur"
        operator="in"
        result="shadow"
      />
      {/* <!-- Merge the three layers together --> */}
      <feMerge result="outline">
        <feMergeNode in="shadow" />
        <feMergeNode in="black-stroke" />
        <feMergeNode in="masked-white" />
      </feMerge>
      <feMorphology
        in="SourceGraphic"
        operator="dilate"
        radius="0"
        result="morph"
      >
        <animate
          attributeName="radius"
          values="0;8;0"
          dur={`2s`}
          repeatCount="indefinite"
        />
      </feMorphology>
      <feComposite
        in2="outline"
        in="morph"
        operator="arithmetic"
        k1="0"
        k2="1"
        k3="1"
        k4="0"
      />
    </>
  </filter>
);
