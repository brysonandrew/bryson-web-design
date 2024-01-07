import styled from '@emotion/styled';
import { TDivMotionProps } from '@t/dom';
import {
  TChildrenPartialProps,
  TClassValueProps,
} from '@t/index';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { FC } from 'react';

export type TFilterAnimateProps = TClassValueProps &
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
