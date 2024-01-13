import { MOTION_BLUR_ID } from '@pages/projects/gallery/sections/constants';
import { TChildren } from '@lib/types/dom';
import { resolveUrlId } from '@lib/utils/attributes/resolveUrlId';
import { CSSProperties, FC } from 'react';
import {
  isSafari,
  isBrowser,
  isDesktop,
} from 'react-device-detect';
import { Filter } from './Filter';
import { MotionValue } from 'framer-motion';
import { Speed } from './Speed';
import { TransformerX } from './TransformerX';
import { TransformerY } from './TransformerY';
import { TDirectionProps } from './config';

const isMotionBlur = !(isSafari && isBrowser);

type TProps = TDirectionProps & {
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
}) => {
  if (!isMotionBlur || !isOn || !isDesktop) {
    return <>{children({})}</>;
  }
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
              {(filterProps) => (
                <Filter
                  {...filterProps}
                  direction={direction}
                />
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
