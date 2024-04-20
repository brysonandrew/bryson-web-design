import type { MotionValue } from 'framer-motion';
import {
  useVelocity,
  useTransform,
  useMotionTemplate,
  motion,
} from 'framer-motion';
import { SvgWrap } from '@brysonandrew/svg/SvgWrap';
import {
  TDisplacementPropsAttr,
  TGaussianBlurMotionPropsAttr,
  TMorphologyPropsAttr,
  TSvgFilterPropsAttr,
  TTurbulenceMotionPropsAttr,
} from '@brysonandrew/svg-filter/config/types/dom';
import { TIdProps } from '@brysonandrew/svg';

type TElementProps = TSvgFilterPropsAttr &
  TGaussianBlurMotionPropsAttr &
  TMorphologyPropsAttr &
  TDisplacementPropsAttr &
  TTurbulenceMotionPropsAttr;

type TProps = TElementProps & TIdProps &{
  motionValue: MotionValue<number>;
  intensity?: number;
  tNumOctaves?: number | MotionValue<number>;
  tSeed?: number | MotionValue<number>;
  mRadius?: number;
};
export const Motion = ({
  motionValue,
  intensity = 200,
  id = 'MOTION_BLUR_ID',
  tNumOctaves = 4,
  tSeed = 2,
  mRadius = 10,
  filterProps,
  turbulenceMotionProps,
  morphologyProps,
  displacementProps,
  gaussianBlurMotionProps,
}: TProps) => {
  const velocity = useVelocity(motionValue);
  const acceleration = useVelocity(velocity);
  const v = useTransform(velocity, (v) => {
    return Math.abs(v) * 0.5;
  });
  const a = useTransform(
    acceleration,
    (v) => Math.abs(v) * 0.5
  );
  const turbulence = useMotionTemplate`0 ${a}`;
  const blur = useMotionTemplate`${v} 0`;
  return (
    <SvgWrap>
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
          result={`${id}-turbulence`}
          {...turbulenceMotionProps}
        />
        <feMorphology
          in={`${id}-turbulence`}
          operator="dilate"
          radius={mRadius}
          result={`${id}-morph`}
          {...morphologyProps}
        />
        <feDisplacementMap
          in2={`${id}-morph`}
          in="SourceGraphic"
          scale={intensity}
          xChannelSelector="R"
          yChannelSelector="G"
          result={`${id}-feDisplacementMap`}
          {...displacementProps}
        />
        <motion.feGaussianBlur
          in={`${id}-feDisplacementMap`}
          stdDeviation={blur}
          {...gaussianBlurMotionProps}
        />
      </filter>
    </SvgWrap>
  );
};
