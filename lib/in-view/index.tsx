import {
  TChildren,
  TClassValueProps,
  TDivMotionProps,
} from '@lib/types/dom';
import {
  IntersectionOptions,
  useInView,
} from 'react-intersection-observer';
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
  TDivMotionProps,
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
      className={clsx('relative', classValue)}
      {...props}
    >
      {children(rest)}
    </Root>
  );
};
