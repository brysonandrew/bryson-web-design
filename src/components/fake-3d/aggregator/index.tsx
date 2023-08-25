import { type FC, useRef, useEffect } from 'react';
import {
  TFake3DMotionChildrenProps,
  TFake3DOptions,
  TPartialStyle,
} from '../config';
import { Dispersion } from './values/Dispersion';
import { Resistance } from './values/Resistance';
import { Visibility } from './values/Visibility';
import { useScrollYBounds } from './useScrollYBounds';
import { useScroll } from '@context/scroll';
import { TRect } from '@t/dom';

type TProps = TFake3DOptions & {
  rect: TRect;
  onUpdateRect(): void;
  children(props: TFake3DMotionChildrenProps): void;
};

export const Aggregator: FC<TProps> = ({
  rect,
  onUpdateRect,
  dispersion: dispersionRange,
  resistance: resistanceRange,
  visibility: visibilityRange,
  children,
}) => {
  const { scroll } = useScroll();
  const styleRef = useRef<TPartialStyle>({});
  const scrollBounds = useScrollYBounds({ rect });
  const config = { 
    scrollY: scroll.y,
    ...scrollBounds,
  };

  useEffect(() => {
    onUpdateRect();
  }, []);

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
            styleRef.current.opacity = v;
            return null;
          }}
        </Visibility>
      )}
      {children({
        rect: rect ?? {},
        style: styleRef.current,
        onUpdateRect,
      })}
    </>
  );
};
