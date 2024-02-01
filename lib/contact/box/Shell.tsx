import { AnimatePresence, motion } from 'framer-motion';
import { TBaseChildren } from '@brysonandrew/types/dom';
import { Clear } from './Clear';
import { TFormKey } from '@brysonandrew/contact/config/types';
import { useFocus } from '../hooks/useFocus';
import { useHoverKey } from '@brysonandrew/cursor';
import {
  MOTION_CONFIG,
  resolveParentAnimateConfig,
} from '@brysonandrew/animation';
import { BIG_CURSOR_KEY } from '@brysonandrew/cursor/config/constants';
import { useApp } from '@brysonandrew/app';
import { CONTACT_FORM_INPUT_LAYOUT_ID } from '../config/constants';

export type TShellProps<T extends HTMLElement> = {
  name: TFormKey;
  isFocused: boolean;
  isDisabled?: boolean;
  isEmpty?: boolean;
  input: T | null;
  children: TBaseChildren;
};
export const Shell = <T extends HTMLElement>({
  name,
  isFocused,
  isDisabled,
  isEmpty,
  input,
  children,
}: TShellProps<T>) => {
  const { LIGHT, Back, BORDER_RADIUS } = useApp();
  const handleFocus = useFocus<T>(input, isFocused);
  const { isHover, handlers } = useHoverKey(
    BIG_CURSOR_KEY,
    name,
  );
  const ShellTextureLIGHT = LIGHT?.Back ?? Back;

  return (
    <motion.label
      className='shell'
      layout
      style={{
        borderRadius: BORDER_RADIUS.MD,
      }}
      {...(isDisabled
        ? {}
        : resolveParentAnimateConfig({ isHover }))}
      {...handlers}
    >
      <ShellTextureLIGHT
        classValue='shell-texture-glow'
        layout
        {...MOTION_CONFIG}
      />
      {children}
      <AnimatePresence>
        {isEmpty && (
          <Clear
            title={`Clear ${name}`}
            key={name}
            name={name}
            isReady={Boolean(isHover)}
            onFocus={handleFocus}
          />
        )}
      </AnimatePresence>
      {LIGHT && isFocused && (
        <LIGHT.Marker
          classValue='z-10'
          layoutId={CONTACT_FORM_INPUT_LAYOUT_ID}
        />
      )}
    </motion.label>
  );
};
