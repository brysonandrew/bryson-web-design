import { Circle } from '@components/buttons/circle';
import { Moon } from '@components/icons/dark-mode/Moon';
import { Sun } from '@components/icons/dark-mode/Sun';
import { useContext } from '@state/Context';
import { resolveVerticalShiftPresence } from '@utils/animation';
import { AnimatePresence, motion } from 'framer-motion';
import {
  ICON_CLASS_VALUE_PROPS,
  SHARED_ANIMATION_PROPS,
  resolveScale,
} from '../config';
import { useHoverKey } from '@hooks/cursor/useHoverKey';
import { TRANSITION } from '@constants/animation';
import { Button } from '@components/buttons/circle/Button';
import { useMoveSound } from '@hooks/sounds/useMoveSound';
import { createElement, useState } from 'react';
import clsx from 'clsx';

export const DarkMode = () => {
  const { darkMode, isScroll } = useContext();
  const isDarkMode = darkMode.isDarkMode;
  const key = isDarkMode ? 'light' : 'dark';
  const title = `Switch to ${key} mode`;

  const { isHover, handlers } = useHoverKey(
    'dark-mode',
    title,
  );
  const handleMove = useMoveSound();
  const handleTap = () => {
    handleMove();
    darkMode.toggle();
  };
  const iconProps = (origin: `${number}%`) => ({
    key: origin,
    ...ICON_CLASS_VALUE_PROPS,
    ...resolveVerticalShiftPresence(origin),
  });
  const scale = resolveScale({ isHover, isScroll });

  return (
    <AnimatePresence initial={false} mode='wait'>
      <motion.div
        key={title}
        animate={{ scale, x: isScroll ? 20 : 0 }}
        transition={{
          delay: isScroll ? 0.1 : 0,
          ...TRANSITION,
        }}
        {...SHARED_ANIMATION_PROPS}
        {...handlers}
      >
        <Circle
          classValue={clsx(
            'relative preserve-3d perspective-1000',
          )}
        >
          <Button title={title} onTap={handleTap}>
            <div className='absolute -inset-2 center overflow-hidden rounded-full'>
              {createElement(isDarkMode ? Moon : Sun, {
                ...iconProps(isDarkMode ? '-100%' : '100%'),
              })}
            </div>
          </Button>
        </Circle>
      </motion.div>
    </AnimatePresence>
  );
};
