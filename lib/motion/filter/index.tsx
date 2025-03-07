import { TDivMotionProps } from '@brysonandrew/config-types/dom/motion';
import { TPropsWithChildren } from '@brysonandrew/config-types/dom/main';
import { cx } from 'class-variance-authority';
import { motion } from 'framer-motion';
import { FC } from 'react';

export type TFilterAnimateProps = TPropsWithChildren<
  Omit<TDivMotionProps, 'color'>
>;
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
            className={cx('fill', classValue)}
            {...props}
          >
            {children}
          </motion.div>
        </>
      )}
    </>
  );
};

export * from './utils/brighten';
export * from './utils/glow';
export * from './utils/invert';
