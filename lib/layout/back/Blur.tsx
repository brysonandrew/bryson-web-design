import type { FC, PropsWithChildren } from 'react';
import { TDivMotionProps } from '@brysonandrew/config-types/dom';
import { motion } from 'framer-motion';
import { useApp } from '@brysonandrew/app';
import clsx from 'clsx';

export type TBackBlurProps =
  PropsWithChildren<TDivMotionProps>;
export const BackBlur: FC<TBackBlurProps> = ({
  classValue,
  children,
  ...props
}) => {
  const { BORDER_RADIUS, Back, LIGHT } = useApp();

  return (
    <motion.div
      whileHover='hover'
      className={clsx('backdrop-blur-sm', classValue)}
      style={{
        borderRadius: BORDER_RADIUS.XL,
      }}
      {...props}
    >
      <>
        {LIGHT ? (
          <LIGHT.Back
            style={{
              borderRadius: BORDER_RADIUS.XL,
            }}
          />
        ) : (
          <Back
            classValue='opacity-50'
            style={{
              borderRadius: BORDER_RADIUS.XL,
            }}
          />
        )}
        <div className='relative'>{children}</div>
      </>
    </motion.div>
  );
};
