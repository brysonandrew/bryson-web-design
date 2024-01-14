import { Moon } from '@lib/components/decoration/icons/dark-mode/Moon';
import { Sun } from '@lib/components/decoration/icons/dark-mode/Sun';
import { resolveVerticalShiftPresence } from '@lib/utils/animation';
import { AnimatePresence } from 'framer-motion';
import { ICON_CLASS_VALUE_PROPS } from '../config';
import { useHoverKey } from '@lib/components/cursor/hooks/useHoverKey';
import { Button } from '@lib/components/interactive/circle/Button';
import { useMoveSound } from '@lib/hooks/sounds/useMoveSound';
import { createElement } from 'react';
import { useDarkMode } from '@lib/hooks/dark-mode/context';
import { CUSTOM_CURSOR_KEY } from '@lib/components/cursor/switch/config';

export const DarkMode = () => {
  const darkMode = useDarkMode();

  const isDarkMode = darkMode.isDarkMode;
  const key = isDarkMode ? 'light' : 'dark';
  const title = `Switch to ${key} mode`;

  const { handlers } = useHoverKey(CUSTOM_CURSOR_KEY, title);
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
