import clsx, { ClassValue } from 'clsx';
import { motion } from 'framer-motion';
import { FC } from 'react';
import * as unoConfig from '@uno/config';
import { useContext } from '@state/Context';
const COLORS = unoConfig.default.theme.colors;

export const THIN_LINE_CLASS =
  'dark:bg-teal-04 bg-gray-2 h-px w-full';

export const ThinLine: FC<{ classValue: ClassValue }> = ({
  classValue,
}) => {
  const { darkMode } = useContext();
  return (
    <motion.hr
      className={clsx(THIN_LINE_CLASS, classValue)}
      variants={{
        hover: {
          backgroundColor: darkMode.isDarkMode
            ? COLORS['teal']
            : COLORS['black'],
        },
      }}
    />
  );
};
