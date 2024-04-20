import { SVGAttributes, SVGProps } from "react";
import { TClassValueProps } from "@brysonandrew/config-types/dom/main";

export type TSvgProps = SVGAttributes<SVGElement> &
  TClassValueProps;

export type TPathProps = SVGAttributes<SVGPathElement>;

export type TSvgCircleProps =
  SVGAttributes<SVGCircleElement>; 

export type TSvgClipPathProps =
  SVGAttributes<SVGClipPathElement>; 

  export type TSvgFilterProps = SVGProps<SVGFilterElement>;

  export type TSvgElementProps = SVGProps<SVGElement>;

 export type TSvgFilterMorphologyProps =  SVGProps<SVGFEMorphologyElement>;
 export type TSvgDisplacementProps = SVGProps<SVGFEDisplacementMapElement>;