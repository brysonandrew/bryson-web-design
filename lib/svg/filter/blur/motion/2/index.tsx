import type { MotionValue } from 'framer-motion';
import { motion } from 'framer-motion';
import {
  TDisplacementPropsAttr,
  TGaussianBlurMotionPropsAttr,
  TMorphologyPropsAttr,
  TSvgFilterPropsAttr,
  TSvgPropsAttr,
  TTurbulenceMotionPropsAttr,
} from '@brysonandrew/svg-filter/config/types/dom';
import {
  TDirectionProps,
  TIdProps,
} from '@brysonandrew/svg-filter';
import { Motion2Speed } from '@brysonandrew/svg-filter/blur/motion/2/speed';
import { Motion2TransformerX } from '@brysonandrew/svg-filter/blur/motion/2/transformer/x';
import { Motion2TransformerY } from '@brysonandrew/svg-filter/blur/motion/2/transformer/y';
import { resolveBlurMotionKeys } from '@brysonandrew/svg-filter/blur/motion/keys';
import { SvgWrap } from '@brysonandrew/svg-dimensionless/dimensionless';

export const MOTION_BLUR_ID_2 = 'MOTION_BLUR_ID_2';

type TElementProps = TSvgPropsAttr &
  TSvgFilterPropsAttr &
  TGaussianBlurMotionPropsAttr &
  TMorphologyPropsAttr &
  TDisplacementPropsAttr &
  TTurbulenceMotionPropsAttr;

type TProps = Partial<TElementProps> &
  TIdProps &
  TDirectionProps & {
    motionValue: MotionValue<number>;
    intensity?: number;
    tNumOctaves?: number | MotionValue<number>;
    tSeed?: number | MotionValue<number>;
    mRadius?: number;
    isVertical?: boolean;
  };
export const BlurMotion2 = ({
  motionValue,
  intensity = 200,
  id = MOTION_BLUR_ID_2,
  tNumOctaves = 4,
  tSeed = 2,
  mRadius = 10,
  axis = 'x',
  svgProps,
  filterProps,
  turbulenceMotionProps,
  morphologyProps,
  displacementProps,
  gaussianBlurMotionProps,
}: TProps) => {

  return (
    <Motion2Speed motionValue={motionValue}>
      {(transformerProps) => {
        const Transformer = {
          x: Motion2TransformerX,
          y: Motion2TransformerY,
        }[axis];

        const props = {
          ...transformerProps,
          axis,
        };
        const {
          TURBULANCE_KEY,
          MORPH_KEY,
          DISPLACEMENT_KEY,
        } = resolveBlurMotionKeys(id);
        return (
          <Transformer {...props}>
            {({ turbulence, blur }) => (
              <SvgWrap {...svgProps}>
                <filter
                  id={id}
                  x="-25%"
                  y="-25%"
                  height="150%"
                  width="150%"
                  {...filterProps}
                >
                  <motion.feTurbulence
                    baseFrequency={turbulence}
                    numOctaves={tNumOctaves}
                    seed={tSeed}
                    type="fractalNoise"
                    in="SourceGraphic"
                    result={TURBULANCE_KEY}
                    {...turbulenceMotionProps}
                  />
                  <feMorphology
                    in={TURBULANCE_KEY}
                    operator="dilate" // erode
                    radius={mRadius}
                    result={MORPH_KEY}
                    {...morphologyProps}
                  />
                  <feDisplacementMap
                    in2={MORPH_KEY}
                    in="SourceGraphic"
                    scale={intensity}
                    xChannelSelector="R"
                    yChannelSelector="G"
                    result={DISPLACEMENT_KEY}
                    {...displacementProps}
                  />
                  <motion.feGaussianBlur
                    in={DISPLACEMENT_KEY}
                    stdDeviation={blur}
                    {...gaussianBlurMotionProps}
                  />
                </filter>
              </SvgWrap>
            )}
          </Transformer>
        );
      }}
    </Motion2Speed>
  );
};
