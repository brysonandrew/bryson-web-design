import { InView, TInViewOptions } from '@components/InView';
import { isMobile } from 'react-device-detect';
import clsx, { ClassValue } from 'clsx';
import { motion } from 'framer-motion';
import type { FC } from 'react';
import { Aggregator } from './aggregator';
import {
  EMPTY_PROPS,
  TFake3DMotionChildrenProps,
  TFake3DOptions,
} from './config';
import { PRESENCE_OPACITY } from '@constants/animation';

type TProps = TFake3DOptions & {
  classValue?: ClassValue;
  inViewOptions?: TInViewOptions;
  children(props: TFake3DMotionChildrenProps): JSX.Element;
};
export const Fake3D: FC<TProps> = ({
  classValue,
  children,
  inViewOptions = {},
  ...optionsConfig
}) => {
  if (isMobile) return children(EMPTY_PROPS);
  return (
    <InView
      className={clsx(
        'flex flex-col items-center relative w-full',
        classValue,
      )}
      amount='some'
      {...inViewOptions}
    >
      {({ isInView, ref, ...rectProps }) => {
        return (
          <>
            {isInView ? (
              <Aggregator {...rectProps} {...optionsConfig}>
                {children}
              </Aggregator>
            ) : (
              <motion.div
                style={{
                  height: rectProps.rect.height,
                }}
                {...PRESENCE_OPACITY}
              />
            )}
          </>
        );
      }}
    </InView>
  );
};
