import { AnimatePresence } from 'framer-motion';
import { useHoverKey } from '@brysonandrew/cursor';
import {
  Button as _Button,
  TButtonProps,
} from '@brysonandrew/interactive/circle/Button';
import { createElement, FC } from 'react';
import { CUSTOM_CURSOR_KEY } from '@brysonandrew/cursor/config/constants';
import { useApp } from '@brysonandrew/app';
import { useDarkMode } from '@brysonandrew/dark-mode';
import {
  TClassValueProps,
  TDivProps,
  TSvgMotionProps,
} from '@brysonandrew/types';
import { Moon, Sun } from './icon';
import { TAnimationProps } from '@brysonandrew/animation';

type TOrigin = '100%' | '-100%';

type TProps = Partial<{
  buttonProps: Partial<TButtonProps>;
  backgroundProps: TDivProps;
  iconProps: TSvgMotionProps & TClassValueProps;
  resolveOrigin: (origin: TOrigin) => TAnimationProps;
}>;
export const Button: FC<TProps> = ({
  buttonProps,
  backgroundProps,
  iconProps,
  resolveOrigin,
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
  const resolveIconProps = (origin: TOrigin) => ({
    key: origin,
    ...(resolveOrigin
      ? resolveOrigin(origin)
      : { style: { y: origin } }),
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
