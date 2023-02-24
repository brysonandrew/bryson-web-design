import type { FC } from "react";
import { HEIGHT, WIDTH, SOBEL_ID } from "./config";
import { TFilterChildrenProps } from "../types";
const DURATION = 4;

export const ID = "Sobel";

export const Sobel: FC<TFilterChildrenProps<typeof ID>> = ({
  children,
  external,
}) => (
  <>
    <filter
      id={SOBEL_ID}
      x={0}
      y={0}
      height={HEIGHT}
      width={WIDTH}
      filterUnits="userSpaceOnUse"
      colorInterpolationFilters="sRGB"
    >
      {/* <!-- convert source image to luminance map--> */}
      <feColorMatrix
        in="SourceGraphic"
        type="matrix"
        values={`0 0 0 0 1 
0 0 0 0 1 
0 0 0 0 1 
1 0 0 0 0`}
        result="RChan"
      />
      <feColorMatrix
        in="SourceGraphic"
        type="matrix"
        values={`0 0 0 0 1 
0 0 0 0 1 
0 0 0 0 1 
0 1 0 0 0`}
        result="GChan"
      />
      <feColorMatrix
        in="SourceGraphic"
        type="matrix"
        values={`0 0 0 0 1 
0 0 0 0 1 
0 0 0 0 1 
0 0 1 0 0`}
        result="BChan"
      />
      {/* <!-- sobel edge detection--> */}
      <feConvolveMatrix
        in="RChan"
        order="3"
        kernelMatrix={`-1 -2 -1  
0 0 0  
1 2 1`}
        result="Rhor"
      />
      <feConvolveMatrix
        in="RChan"
        order="3"
        kernelMatrix={`-1 0 1  
-2 0 2 
-1 0 1`}
        result="Rver"
      />
      <feComposite
        operator="arithmetic"
        k2="1"
        k3="1"
        in="Rhor"
        in2="Rver"
      />
      <feColorMatrix
        type="matrix"
        values={`0 0 0 1 0
0 0 0 0 0 
0 0 0 0 0 
0 0 0 0 1`}
        result="rededge"
      />
      <feConvolveMatrix
        in="GChan"
        order="3"
        kernelMatrix={`-1 -2 -1  
0 0 0  
1 2 1`}
        result="Ghor"
      />
      <feConvolveMatrix
        in="GChan"
        order="3"
        kernelMatrix={`-1 0 1 
-2 0 2 
-1 0 1`}
        result="Gver"
      />
      <feComposite
        operator="arithmetic"
        k2="1"
        k3="1"
        in="Ghor"
        in2="Gver"
      />
      <feColorMatrix
        type="matrix"
        values={`0 0 0 0 0
0 0 0 1 0 
0 0 0 0 0 
0 0 0 0 1`}
        result="greenedge"
      />
      <feConvolveMatrix
        in="BChan"
        order="3"
        kernelMatrix={`-1 -2 -1 
0 0 0 
1 2 1`}
        result="Bhor"
      >
        {/* <animate
        attributeName="order"
        values="3;0;3"
        dur={`${DURATION}s`}
        repeatCount="indefinite"
      /> */}
      </feConvolveMatrix>
      <feConvolveMatrix
        in="BChan"
        order="3"
        kernelMatrix={`-1 0 1  
-2 0 2 
-1 0 1`}
        result="Bver"
      >
        {/* <animate
        attributeName="order"
        values="3;0;3"
        dur={`${DURATION}s`}
        repeatCount="indefinite"
      /> */}
      </feConvolveMatrix>
      <feComposite
        operator="arithmetic"
        k2="1"
        k3="1"
        in="Bhor"
        in2="Bver"
      >
        {/* <animate
        attributeName="k2"
        values="1;0;1"
        dur={`${DURATION}s`}
        repeatCount="indefinite"
      /> */}
      </feComposite>
      <feColorMatrix
        type="matrix"
        values={`0 0 0 0 0 
0 0 0 0 0 
0 0 0 1 0 
0 0 0 0 1`}
        result="blueedge"
      />
      <feComposite
        operator="arithmetic"
        in="blueedge"
        in2="rededge"
        k2="1"
        k3="1"
      >
        {/* <animate
        attributeName="k3"
        values="1;0;1"
        dur={`${DURATION}s`}
        repeatCount="indefinite"
      /> */}
      </feComposite>
      <feComposite
        operator="arithmetic"
        in2="greenedge"
        k2="1"
        k3="1"
        result="finalEdges"
      >
        {/* <animate
        attributeName="k2"
        values="1;0;1"
        dur={`${DURATION}s`}
        repeatCount="indefinite"
      /> */}
      </feComposite>
      <feFlood floodColor="black" result="black" />
      <feComposite
        operator="over"
        in="finalEdges"
        in2="black"
        result={ID}
      />
      {/* <feMorphology
        in="sobelEdges"
        operator="erode"
        radius="10"
        result="morph"
      > */}
        {/* <animate
          attributeName="radius"
          values="0;10;0"
          dur={`${DURATION}s`}
          repeatCount="indefinite"
        /> */}
      {/* </feMorphology> */}
      {/* <feComposite
        k1="0"
        k2="0.2"
        k3="0.6"
        k4="0"
        operator="arithmetic"
        in="morph"
        in2="SourceGraphic"
      /> */}
      {children && children(ID)}
    </filter>
    {external && external(ID)}
  </>
);
