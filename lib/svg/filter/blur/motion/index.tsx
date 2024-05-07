import { TChildren } from '@brysonandrew/config-types/dom';
import { resolveUrlId } from '@brysonandrew/utils-attributes/resolveUrlId';
import { CSSProperties, FC } from 'react';
import {
  isSafari,
  isBrowser,
  isDesktop,
} from 'react-device-detect';
import { motion, MotionValue } from 'framer-motion';
import { Speed } from './Speed';
import { TransformerX } from './TransformerX';
import { TransformerY } from './TransformerY';
import {
  TDirectionProps,
  TIdProps,
} from '@brysonandrew/svg-filter';
import { SvgWrap } from '@brysonandrew/svg';
import { resolveBlurMotionKeys } from '@brysonandrew/svg-filter/blur/motion/keys';

const intensity = 200;
const isMotionBlur = !(isSafari && isBrowser);
const MOTION_BLUR_ID = 'MOTION_BLUR_ID';
type TProps = TDirectionProps &
  TIdProps & {
    isOn: boolean;
    motionValue: MotionValue;
    children(
      filterProps: Partial<Pick<CSSProperties, 'filter'>>
    ): TChildren;
  };
export const BlurMotion: FC<TProps> = ({
  isOn,
  axis = 'x',
  motionValue,
  children,
  id = MOTION_BLUR_ID,
}) => {
  if (!isMotionBlur || !isOn || !isDesktop) {
    return <>{children({})}</>;
  }
  const {
    TURBULANCE_KEY,
    MORPH_KEY,
    DISPLACEMENT_KEY,
    OFFSET_KEY,
  } = resolveBlurMotionKeys(id);

  return (
    <>
      <Speed motionValue={motionValue}>
        {(transformerProps) => {
          const Transformer = {
            x: TransformerX,
            y: TransformerY,
          }[axis];

          const props = {
            ...transformerProps,
            axis,
          };
          return (
            <Transformer {...props}>
              {({ turbulence, blur }) => (
                <SvgWrap>
                  <filter
                    id={id}
                    x="-50%"
                    y="-50%"
                    height="200%"
                    width="200%"
                  >
                    <feOffset
                      in="SourceGraphic"
                      y1="-100px"
                      y2="100px"
                      x1="-100px"
                      x2="100px"
                      result={OFFSET_KEY}
                    />
                    <motion.feTurbulence
                      baseFrequency={turbulence}
                      numOctaves="4"
                      seed="2"
                      type="turbulence"
                      in={OFFSET_KEY}
                      result={TURBULANCE_KEY}
                    />
                    <feMorphology
                      in={TURBULANCE_KEY}
                      operator="dilate"
                      radius="8"
                      result={MORPH_KEY}
                    />

                    <feDisplacementMap
                      in2={MORPH_KEY}
                      in={OFFSET_KEY}
                      scale={intensity}
                      xChannelSelector="R"
                      yChannelSelector="G"
                      result={DISPLACEMENT_KEY}
                    />
                    <motion.feGaussianBlur
                      in={DISPLACEMENT_KEY}
                      stdDeviation={blur}
                    />
                  </filter>
                </SvgWrap>
              )}
            </Transformer>
          );
        }}
      </Speed>
      {children({
        filter: resolveUrlId(MOTION_BLUR_ID),
      })}
    </>
  );
};
