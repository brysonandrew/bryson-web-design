import clsx, { ClassValue } from 'clsx';
import { motion } from 'framer-motion';
import { FC } from 'react';
import { useContext } from '@state/Context';
import { COLORS } from '@constants/colors';

export const THIN_LINE_CLASS =
  'dark:bg-teal-04 bg-gray-2 h-px w-full';

export const ThinLine: FC<{ classValue: ClassValue }> = ({
  classValue,
}) => {
  const {
    darkMode: { isDarkMode },
  } = useContext();
  return (
    <motion.hr
      key={isDarkMode ? 'dark' : 'light'}
      className={clsx(THIN_LINE_CLASS, classValue)}
      variants={{
        hover: {
          backgroundColor: isDarkMode
            ? COLORS['teal']
            : COLORS['black'],
        },
      }}
    />
  );
};
