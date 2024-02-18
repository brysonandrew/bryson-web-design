import { motion } from 'framer-motion';
import { useApp } from '@brysonandrew/app';
import clsx from 'clsx';
import { TBackMotionC } from '@brysonandrew/layout-back/config/types';

export const BackMotionBlur: TBackMotionC = ({
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
        <motion.div className='relative'>
          {children}
        </motion.div>
      </>
    </motion.div>
  );
};
