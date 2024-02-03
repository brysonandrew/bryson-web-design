import { TDivMotionProps } from '@brysonandrew/config/types';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import type { FC } from 'react';

type TContrast = 'high' | 'higher' | 'highest';

const resolveDark = (contrast?: TContrast) => {
  if (contrast === 'high') return 'bg-dark';
  if (contrast === 'higher') return 'bg-darker';
  return 'bg-darkest';
};

const resolveLight = (contrast?: TContrast) => {
  if (contrast === 'high') return 'bg-light';
  if (contrast === 'higher') return 'bg-lighter';
  return 'bg-lightest';
};

type TProps = TDivMotionProps & {
  contrast?: TContrast;
};
export const BackgroundFill: FC<TProps> = ({
  contrast,
  ...props
}) => {
  return (
    <>
      <motion.div
        className={clsx('fill', resolveDark(contrast))}
        {...props}
      />
      <motion.div
        className={clsx('fill', resolveLight(contrast))}
        {...props}
      />
    </>
  );
};
