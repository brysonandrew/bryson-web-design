import { TChildren } from '@brysonandrew/types/dom';
import { resolveUrlId } from '@brysonandrew/utils/attributes/resolveUrlId';
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
import { TDirectionProps, TIdProps } from './config';
import {
  MOTION_BLUR_ID,
  MOTION_BLUR_INTENSITY,
} from '../blur/constants';
import { resolveCompositeKey } from '@brysonandrew/utils';
import { FilterShell } from '../FilterShell';
const intensity = MOTION_BLUR_INTENSITY;

const isMotionBlur = !(isSafari && isBrowser);

type TProps = TDirectionProps &
  TIdProps & {
    isOn: boolean;
    motionValue: MotionValue;
    children(
      filterProps: Partial<Pick<CSSProperties, 'filter'>>,
    ): TChildren;
  };
export const MotionBlur: FC<TProps> = ({
  isOn,
  direction = 'x',
  motionValue,
  children,
  id = MOTION_BLUR_ID,
}) => {
  if (!isMotionBlur || !isOn || !isDesktop) {
    return <>{children({})}</>;
  }

  const TURBULANCE_KEY = resolveCompositeKey(
    id,
    'TURBULANCE',
  );
  const MORPH_KEY = resolveCompositeKey(id, 'MORPH');
  const DISPLACEMENT_KEY = resolveCompositeKey(
    id,
    'DISPLACEMENT',
  );
  const OFFSET_KEY = resolveCompositeKey(id, 'OFFSET');

  return (
    <>
      <Speed motionValue={motionValue}>
        {(transformerProps) => {
          const Transformer = {
            x: TransformerX,
            y: TransformerY,
          }[direction];

          const props = {
            ...transformerProps,
            direction,
          };
          return (
            <Transformer {...props}>
              {({ turbulence, blur }) => (
                <FilterShell>
                  <filter
                    id={id}
                    x='-50%'
                    y='-50%'
                    height='200%'
                    width='200%'
                  >
                    <feOffset
                      in='SourceGraphic'
                      y1='-100px'
                      y2='100px'
                      x1='-100px'
                      x2='100px'
                      result={OFFSET_KEY}
                    />
                    <motion.feTurbulence
                      baseFrequency={turbulence}
                      numOctaves='4'
                      seed='2'
                      type='turbulence'
                      in={OFFSET_KEY}
                      result={TURBULANCE_KEY}
                    />
                    <feMorphology
                      in={TURBULANCE_KEY}
                      operator='dilate'
                      radius='8'
                      result={MORPH_KEY}
                    />

                    <feDisplacementMap
                      in2={MORPH_KEY}
                      in={OFFSET_KEY}
                      scale={intensity}
                      xChannelSelector='R'
                      yChannelSelector='G'
                      result={DISPLACEMENT_KEY}
                    />
                    <motion.feGaussianBlur
                      in={DISPLACEMENT_KEY}
                      stdDeviation={blur}
                    />
                  </filter>
                </FilterShell>
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
