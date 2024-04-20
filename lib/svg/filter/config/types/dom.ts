import { SVGProps } from "react";
import { SVGMotionProps } from "framer-motion";
import { TSvgDisplacementProps, TSvgElementProps, TSvgFilterMorphologyProps, TSvgFilterProps } from "@brysonandrew/config-types/dom/element/svg";

export type TTurbulenceMotionPropsAttr = {turbulenceMotionProps: SVGMotionProps<SVGFETurbulenceElement>};
export type TMorphologyPropsAttr = {morphologyProps: TSvgFilterMorphologyProps};
export type TDisplacementPropsAttr = {displacementProps: TSvgDisplacementProps};
export type TGaussianBlurMotionPropsAttr = {gaussianBlurMotionProps: SVGMotionProps<SVGFEGaussianBlurElement>};
export type TSvgElementPropsAttr = {elementProps: TSvgElementProps};

export type TSvgFilterPropsAttr = {filterProps: TSvgFilterProps};
 