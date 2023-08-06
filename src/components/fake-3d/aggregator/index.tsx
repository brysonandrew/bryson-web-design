import { type FC, useRef } from 'react';
import {
  TFake3DMotionChildrenProps,
  TFake3DOptions,
  TStyleProps,
} from '../config';
import { Dispersion } from './values/Dispersion';
import { Resistance } from './values/Resistance';
import { Visibility } from './values/Visibility';
import { useScrollBounds } from './useScrollBounds';
import { TRect } from '@t/dom';

type TProps = TFake3DOptions & {
  rect: TRect;
  children(props: TFake3DMotionChildrenProps): void;
};
export const Aggregator: FC<TProps> = ({
  rect,
  dispersion: dispersionRange,
  resistance: resistanceRange,
  visibility: visibilityRange,
  children,
}) => {
  const styleRef = useRef<Partial<TStyleProps>>({});
  const config = useScrollBounds({ rect });

  return (
    <>
      {dispersionRange && (
        <Dispersion range={dispersionRange} {...config}>
          {(v) => {
            styleRef.current.rotateX = v;
            return null;
          }}
        </Dispersion>
      )}
      {resistanceRange && (
        <Resistance range={resistanceRange} {...config}>
          {(v) => {
            styleRef.current.y = v;
            return null;
          }}
        </Resistance>
      )}
      {visibilityRange && (
        <Visibility range={visibilityRange} {...config}>
          {(v) => {
            styleRef.current.filter = v;
            return null;
          }}
        </Visibility>
      )}
      {children({
        style: styleRef.current,
      })}
    </>
  );
};
