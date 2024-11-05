import {
  TChildren,
  TClassValueProps,
  TDivMotionProps,
} from '@brysonandrew/config-types/dom';
import {
  IntersectionOptions,
  useInView,
} from 'react-intersection-observer';
import { cx } from 'class-variance-authority';
import { motion } from 'framer-motion';

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
    <motion.div
      ref={ref}
      style={style}
      className={cx('relative', classValue)}
      {...props}
    >
      {children(rest)}
    </motion.div>
  );
};

export * from './Replacer';
