import { Moon } from '@brysonandrew/lib/icons/components/dark-mode/Moon';
import { Sun } from '@brysonandrew/lib/icons/components/dark-mode/Sun';
import { resolveVerticalShiftPresence } from '@brysonandrew/lib/animation/utils';
import { AnimatePresence } from 'framer-motion';
import { ICON_CLASS_VALUE_PROPS } from '../config';
import { useHoverKey } from '@brysonandrew/lib/cursor/hooks/useHoverKey';
import { Button } from '@brysonandrew/lib/components/interactive/circle/Button';
import { useMoveSound } from '@brysonandrew/lib/hooks/sounds/useMoveSound';
import { createElement } from 'react';
import { CUSTOM_CURSOR_KEY } from '@brysonandrew/lib/cursor/switch/config';
import { useApp } from '@brysonandrew/lib/context/app/useApp';
import { useDarkMode } from '@brysonandrew/lib/context';

export const DarkMode = () => {
  const { BORDER_RADIUS } = useApp();
  const darkMode = useDarkMode();

  const isDarkMode = darkMode.isDarkMode;
  const key = isDarkMode ? 'light' : 'dark';
  const title = `Switch to ${key} mode`;

  const { handlers } = useHoverKey(
    CUSTOM_CURSOR_KEY,
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

  return (
    <AnimatePresence initial={false} mode='wait'>
      <Button
        key={title}
        title={title}
        onTap={handleTap}
        {...handlers}
      >
        <div
          className='fill preserve-3d perspective-1000 -mt-0.5 center overflow-hidden'
          style={{ borderRadius: BORDER_RADIUS.LG }}
        >
          {createElement(isDarkMode ? Moon : Sun, {
            ...iconProps(isDarkMode ? '-100%' : '100%'),
          })}
        </div>
      </Button>
    </AnimatePresence>
  );
};
