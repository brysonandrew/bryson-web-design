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
} from '@brysonandrew/config/types';
import { Moon, Sun } from './icon';
import {
  PRESENCE_ROTATE_FROM_TOP,
  PRESENCE_ROTATE_FROM_BOTTOM,
} from '@brysonandrew/animation';

type TProps = Partial<{
  buttonProps: Partial<TButtonProps>;
  backgroundProps: TDivProps;
  iconProps: TSvgMotionProps & TClassValueProps;
}>;
export const Button: FC<TProps> = ({
  buttonProps,
  backgroundProps,
  iconProps,
}) => {
  const { BORDER_RADIUS, sounds } = useApp();
  const { isDarkMode, toggle } = useDarkMode();

  const key = isDarkMode ? 'light' : 'dark';
  const title =
    buttonProps?.title ?? `Switch to ${key} mode`;

  const { handlers } = useHoverKey(
    CUSTOM_CURSOR_KEY,
    title,
  );
  const handleTap = () => {
    if (sounds?.move) {
      sounds.move();
    }
    toggle();
  };

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
            ...{
              key: title,
              ...(isDarkMode
                ? PRESENCE_ROTATE_FROM_TOP
                : PRESENCE_ROTATE_FROM_BOTTOM),
              ...iconProps,
            },
          })}
        </div>
      </_Button>
    </AnimatePresence>
  );
};
