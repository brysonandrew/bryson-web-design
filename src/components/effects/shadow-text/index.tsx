import type { FC } from "react";
import type { TFilterChildrenProps } from "../types";
import { HEIGHT, WIDTH } from "../constants";

export const ID = "ShadowTextId";

export const ShadowText: FC<
  TFilterChildrenProps
> = ({ children }) => (
  <filter id={ID} x={0} y={0} height={HEIGHT} width={WIDTH}>
    <feGaussianBlur
      in="SourceGraphic"
      stdDeviation="3"
      result="blurredAlpha"
    />
    <feOffset
      in="blurredAlpha"
      dx="2"
      dy="1"
      result="offsetBlurredAlpha"
    />
    <feDiffuseLighting
      in="blurredAlpha"
      diffuseConstant=".5"
      result="bumpMapDiffuse"
    >
      <feDistantLight />
    </feDiffuseLighting>
    <feComposite
      in="bumpMapDiffuse"
      in2="SourcePaint"
      operator="arithmetic"
      k1="1"
      result="litPaint"
    />
    <feSpecularLighting
      in="blurredAlpha"
      in2="feDistantLight"
      specularConstant=".5"
      specularExponent="10"
      result="bumpMapSpecular"
    >
      <feDistantLight />
    </feSpecularLighting>
    <feComposite
      in="litPaint"
      in2="bumpMapSpecular"
      operator="arithmetic"
      k2="1"
      k3="1"
      result="litPaint"
    />
    <feComposite
      in="litPaint"
      in2="SourceAlpha"
      operator="in"
      result="litPaint"
    />
    <feMerge result={ID}>
      <feMergeNode in="litPaint" />
      <feMergeNode in="offsetBlurredAlpha" />
    </feMerge>
    {children && children(ID)}
  </filter>
);
