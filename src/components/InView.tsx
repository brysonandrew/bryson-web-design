import { TChildren, TClassValueProps } from '@t/index';
import { TMotionDivProps } from '@t/dom';
import {
  IntersectionOptions,
  useInView,
} from 'react-intersection-observer';
import { SLOW_MOTION_CONFIG } from '@constants/animation';
import styled from '@emotion/styled';
import clsx from 'clsx';
import { motion } from 'framer-motion';

const Root = styled(motion.div)``;

export type TInViewChildrenProps = Omit<
  ReturnType<typeof useInView>,
  'ref'
>;
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
  const { ref, ...rest } = useInView({
    threshold: 0.2,
    ...options,
  });

  return (
    <Root
      ref={ref}
      style={style}
      className={clsx('in-view relative', classValue)}
      {...props}
    >
      {children(rest)}
    </Root>
  );
};
