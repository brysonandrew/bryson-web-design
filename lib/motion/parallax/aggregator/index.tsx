import { type FC, useRef, useEffect } from 'react';
import { useScroll } from '@brysonandrew/motion-scroll';
import { TRect } from '@brysonandrew/config-types/dom/main';
import { useScrollYBounds } from '@brysonandrew/motion-parallax/aggregator/useScrollYBounds';
import { Dispersion } from '@brysonandrew/motion-parallax/aggregator/values/Dispersion';
import { Resistance } from '@brysonandrew/motion-parallax/aggregator/values/Resistance';
import { Visibility } from '@brysonandrew/motion-parallax/aggregator/values/Visibility';
import { TParallaxOptions, TPartialParallaxMotionProps, TPartialStyle } from '@brysonandrew/motion-parallax/config';

type TProps = TParallaxOptions & {
  rect: TRect;
  onUpdateRect(): void;
  children(props: TPartialParallaxMotionProps): void;
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
