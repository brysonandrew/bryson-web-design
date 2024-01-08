import { Moon } from '@components/icons/dark-mode/Moon';
import { Sun } from '@components/icons/dark-mode/Sun';
import { resolveVerticalShiftPresence } from '@utils/animation';
import { AnimatePresence } from 'framer-motion';
import { ICON_CLASS_VALUE_PROPS } from '../config';
import { useHoverKey } from '@hooks/cursor/useHoverKey';
import { Button } from '@components/buttons/circle/Button';
import { useMoveSound } from '@hooks/sounds/useMoveSound';
import { createElement } from 'react';
import { useDarkMode } from '@context/dark-mode';

export const DarkMode = () => {
  const darkMode = useDarkMode();

  const isDarkMode = darkMode.isDarkMode;
  const key = isDarkMode ? 'light' : 'dark';
  const title = `Switch to ${key} mode`;

  const { handlers } = useHoverKey('dark-mode', title);
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

  return (
    <AnimatePresence initial={false} mode='wait'>
      <Button
        key={title}
        title={title}
        onTap={handleTap}
        {...handlers}
      >
        <div className='absolute preserve-3d perspective-1000 -inset-2 center overflow-hidden rounded-full'>
          {createElement(isDarkMode ? Moon : Sun, {
            ...iconProps(isDarkMode ? '-100%' : '100%'),
          })}
        </div>
      </Button>
    </AnimatePresence>
  );
};
