import { Circle } from '@components/buttons/Circle';
import { Moon } from '@components/icons/dark-mode/Moon';
import { Sun } from '@components/icons/dark-mode/Sun';
import { useContext } from '@state/Context';
import { resolveVerticalShiftPresence } from '@utils/animation';
import { AnimatePresence } from 'framer-motion';
import { ICON_CLASS_VALUE_PROPS } from '../constants';
import { useHoverKey } from '@hooks/useHoverKey';

export const DarkMode = () => {
  const { darkMode } = useContext();

  const { isHover, ...handlers } = useHoverKey(
    'big',
    'dark-mode',
  );

  const handleTap = () => {
    darkMode.toggle();
  };

  const iconProps = (origin: `${number}%`) => ({
    key: origin,
    ...ICON_CLASS_VALUE_PROPS,
    ...resolveVerticalShiftPresence(origin),
  });

  return (
    <Circle
      aria-label='dark-mode'
      classValue='overflow-hidden preserve-3d perspective-1000'
      onTap={handleTap}
      {...handlers}
    >
      <AnimatePresence mode='wait' initial={false}>
        {darkMode.isDarkMode ? (
          <Moon {...iconProps('-100%')} />
        ) : (
          <Sun {...iconProps('100%')} />
        )}
      </AnimatePresence>
    </Circle>
  );
};
