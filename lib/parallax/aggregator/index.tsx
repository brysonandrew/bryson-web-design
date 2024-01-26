import { type FC, useRef, useEffect } from 'react';
import {
  TParallaxMotionChildrenProps,
  TParallaxOptions,
  TPartialStyle,
} from '../config';
import { useScroll } from '@brysonandrew/scroll';
import { TRect } from '@brysonandrew/types/dom/main';
import { useScrollYBounds } from '@brysonandrew/parallax/aggregator/useScrollYBounds';
import { Dispersion } from '@brysonandrew/parallax/aggregator/values/Dispersion';
import { Resistance } from '@brysonandrew/parallax/aggregator/values/Resistance';
import { Visibility } from '@brysonandrew/parallax/aggregator/values/Visibility';

type TProps = TParallaxOptions & {
  rect: TRect;
  onUpdateRect(): void;
  children(props: TParallaxMotionChildrenProps): void;
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
