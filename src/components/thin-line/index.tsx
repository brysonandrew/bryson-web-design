import clsx, { ClassValue } from 'clsx';
import { motion } from 'framer-motion';
import { FC } from 'react';
import COLORS from '@windi/config-colors.json';

export const THIN_LINE_CLASS = 'bg-teal-04 h-px w-full';

export const ThinLine: FC<{ classValue: ClassValue }> = ({
  classValue,
}) => (
  <motion.hr
    className={clsx(THIN_LINE_CLASS, classValue)}
    variants={{
      hover: { backgroundColor: COLORS['teal'] },
    }}
  />
);
