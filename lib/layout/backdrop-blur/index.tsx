import type { FC } from 'react';
import { TDivMotionProps } from '@brysonandrew/config-types/dom';
import { motion } from 'framer-motion';
import { useApp } from '@brysonandrew/app';

type TProps = TDivMotionProps;
export const BackdropBlur: FC<TProps> = ({
  children,
  ...props
}) => {
  const { BORDER_RADIUS, Back, LIGHT, COLOR } = useApp();

  return (
    <motion.div
      whileHover='hover'
      className='backdrop-blur-sm'
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
