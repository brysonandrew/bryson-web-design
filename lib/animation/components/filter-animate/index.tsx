import { TDivMotionProps } from '@lib/types/dom/motion';
import {
  TChildrenPartialProps,
  TClassValueProps,
} from '@lib/types/dom/main';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { FC } from 'react';

export type TFilterAnimateProps = Omit<
  TDivMotionProps,
  'color'
> &
  TClassValueProps &
  TChildrenPartialProps;
export const FilterAnimate: FC<TFilterAnimateProps> = ({
  classValue,
  children,
  ...props
}) => {
  return (
    <>
      {children && (
        <>
          {children}
          <motion.div
            className={clsx('absolute inset-0', classValue)}
            {...props}
          >
            {children}
          </motion.div>
        </>
      )}
    </>
  );
};
