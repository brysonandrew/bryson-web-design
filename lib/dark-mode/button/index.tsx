import { resolveVerticalShiftPresence } from '@brysonandrew/animation/utils';
import { AnimatePresence } from 'framer-motion';
import { useHoverKey } from '@brysonandrew/cursor';
import { Button as _Button } from '@brysonandrew/base/components/interactive/circle/Button';
import { createElement, FC } from 'react';
import { CUSTOM_CURSOR_KEY } from '@brysonandrew/cursor/switch/config';
import { useApp } from '@brysonandrew/app';
import { useDarkMode } from '@brysonandrew/dark-mode';
import {
  TButtonMotionProps,
  TClassValueProps,
  TDivProps,
  TSvgMotionProps,
} from '@brysonandrew/base';
import { Moon, Sun } from './icon';

const ICON_CLASS_VALUE_PROPS =
  'dark:fill-highlight fill-current dark:stroke-current stroke-none';

type TProps = TClassValueProps &
  Partial<{
    buttonProps: TButtonMotionProps;
    backgroundProps: TDivProps;
    iconProps: TSvgMotionProps;
  }>;
export const Button: FC<TProps> = ({
  classValue = ICON_CLASS_VALUE_PROPS,
  buttonProps,
  backgroundProps,
  iconProps,
}) => {
  const { BORDER_RADIUS, onSound } = useApp();
  const darkMode = useDarkMode();

  const isDarkMode = darkMode.isDarkMode;
  const key = isDarkMode ? 'light' : 'dark';
  const title =
    buttonProps?.title ?? `Switch to ${key} mode`;

  const { handlers } = useHoverKey(
    CUSTOM_CURSOR_KEY,
    title,
  );
  const handleTap = () => {
    onSound();
    darkMode.toggle();
  };
  const resolveIconProps = (origin: `${number}%`) => ({
    key: origin,
    classValue,
    ...resolveVerticalShiftPresence(origin),
    ...iconProps,
  });

  return (
    <AnimatePresence initial={false} mode='wait'>
      <_Button
        key={title}
        title={title}
        onTap={handleTap}
        {...handlers}
        {...buttonProps}
      >
        <div
          className='fill preserve-3d perspective-1000 -mt-0.5 center overflow-hidden'
          style={{ borderRadius: BORDER_RADIUS.LG }}
          {...backgroundProps}
        >
          {createElement(isDarkMode ? Moon : Sun, {
            ...resolveIconProps(
              isDarkMode ? '-100%' : '100%',
            ),
          })}
        </div>
      </_Button>
    </AnimatePresence>
  );
};
