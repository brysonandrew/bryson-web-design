import { TChildren, TClassValueProps } from '@t/index';
import { TMotionDivProps, TRect } from '@t/dom';
import { createElement, useState, useContext } from 'react';
import {
  IntersectionOptions,
  useInView,
} from 'react-intersection-observer';
import { TProps } from './gallery/footer/core/items/Button';
import { SLOW_MOTION_CONFIG } from '@constants/animation';
import styled from '@emotion/styled';
import clsx from 'clsx';
import { motion } from 'framer-motion';

const Root = styled(motion.div)``;

export type TInViewChildrenProps = Omit<
  ReturnType<typeof useInView>,
  'ref'
> & {
  rect: TRect;
};
export type TBoxChildrenProps = {
  children(props: TInViewChildrenProps): TChildren;
};

export type TInViewProps = Omit<
  TMotionDivProps,
  'children'
> &
  TClassValueProps &
  TBoxChildrenProps & {
    options?: IntersectionOptions;
  };
export const InView = ({
  classValue,
  style,
  options,
  children,
  ...props
}: TInViewProps) => {
  const [rect, setRect] = useState<TRect>(null);
  const { ref, ...rest } = useInView({
    threshold: 0.2,
    triggerOnce: true,
    onChange: (inView, entry) => {
      if (inView) {
        const rect = entry.target.getBoundingClientRect();
        setRect(rect);
      }
    },
    ...options,
  });

  console.log(rect)

  return (
    <Root
      ref={ref}
      style={{ ...style }}
      className={clsx('relative', classValue)}
      transition={{ ...SLOW_MOTION_CONFIG, delay: 0 }}
      {...props}
    >
      {children({ rect, ...rest })}
    </Root>
  );
};
