import { InView } from '@brysonandrew/in-view';
import { cx } from 'class-variance-authority';
import { type FC } from 'react';
import { Aggregator } from './aggregator';
import {
  EMPTY_PROPS,
  TPartialParallaxMotionProps,
  TParallaxOptions,
} from './config';
import { IntersectionOptions } from 'react-intersection-observer';
import { isDesktop } from 'react-device-detect';
import { Rect } from '@brysonandrew/space/Rect';
import { TClassValueProps } from '@brysonandrew/config-types';

type TProps = TClassValueProps &
  TParallaxOptions & {
    intersectionOptions?: IntersectionOptions;
    children(
      props: TPartialParallaxMotionProps,
    ): JSX.Element;
  };
export const Parallax: FC<TProps> = ({
  classValue,
  children,
  intersectionOptions = {},
  ...optionsConfig
}) => {
  if (!isDesktop) return children(EMPTY_PROPS);

  return (
    <InView
      classValue={cx(classValue)}
      options={{
        triggerOnce: false,
        threshold: 0,
        rootMargin: '280px',
        ...intersectionOptions,
      }}
    >
      {({ inView, entry }) => (
        <Rect>
          {({ rect, onUpdate }) => {
            if (inView) {
              return (
                <Aggregator
                  rect={rect}
                  onUpdateRect={() => {
                    if (entry) {
                      onUpdate(entry.target);
                    }
                  }}
                  {...optionsConfig}
                >
                  {children}
                </Aggregator>
              );
            }
            if (typeof rect !== 'undefined') {
              return (
                <div
                  style={{
                    height: rect?.height,
                  }}
                />
              );
            }

            return null;
          }}
        </Rect>
      )}
    </InView>
  );
};

export * from './config';
export * from './hooks/useDispersion';
export * from './hooks/useResistance';
export * from './hooks/useVisibility';
export * from './aggregator';
export * from './aggregator/useScrollYBounds';
export * from './aggregator/values/Dispersion';
export * from './aggregator/values/Resistance';
export * from './aggregator/values/Visibility';
