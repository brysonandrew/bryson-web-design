import { useScroll } from 'framer-motion';
import { TUpdateRectProps } from '@components/InView';
import { type FC, useRef } from 'react';
import {
  TFake3DMotionChildrenProps,
  TOptionsConfig,
  TStyleProps,
} from '../config';
import { Dispersion } from './values/Dispersion';
import { Resistance } from './values/Resistance';
import { Visibility } from './values/Visibility';
import { useScrollBounds } from './useScrollBounds';

type TProps = TUpdateRectProps &
  TOptionsConfig & {
    children(props: TFake3DMotionChildrenProps): void;
  };
export const Aggregator: FC<TProps> = ({
  children,
  dispersion: dispersionRange,
  resistance: resistanceRange,
  visibility: visibilityRange,
  ...rectConfig
}) => {
  const { scrollY } = useScroll();
  const styleRef = useRef<Partial<TStyleProps>>({});

  const scrollBounds = useScrollBounds({ rectConfig });

  const config = {
    scrollY,
    ...scrollBounds,
  };

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
        rectConfig,
      })}
    </>
  );
};
