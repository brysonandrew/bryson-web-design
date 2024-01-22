import clsx from 'clsx';
import { motion } from 'framer-motion';
import { useEffect, type FC, useRef } from 'react';
import { useContact } from '@brysonandrew/contact';
import { useHoverKey } from '@brysonandrew/cursor';
import {
  EFFECT_ANIMATE_TRANSITION,
  resolveParentAnimateConfig,
} from '@brysonandrew/animation/config/constants';
import { BIGGER_CURSOR_KEY } from '@brysonandrew/cursor/switch/config';
import { useApp } from '@brysonandrew/app';
import { resolveButtonValue } from '../utils/resolveButtonValue';

type TProps = { isDisabled: boolean };
export const Submit: FC<TProps> = ({ isDisabled }) => {
  const { BORDER_RADIUS, Glow, onSound } = useApp();
  const { isHover, handlers } = useHoverKey(
    BIGGER_CURSOR_KEY,
    'form-submit',
  );
  const { status } = useContact();
  const ref = useRef<HTMLLabelElement>(null);
  const title = resolveButtonValue(status);

  useEffect(() => {
    if (status === 'sent' && ref.current !== null) {
      ref.current.scrollIntoView({ block: 'center' });
    }
  }, [status]);

  return (
    <motion.label
      ref={ref}
      className={clsx('submit', [
        isDisabled
          ? 'cursor-not-allowed'
          : 'cursor-pointer',
      ])}
      layout
      onTap={isDisabled ? () => null : onSound}
      {...(isDisabled
        ? {}
        : resolveParentAnimateConfig({ isHover }))}
      style={{
        borderRadius: BORDER_RADIUS.MD,
      }}
      {...handlers}
    >
      {Glow && <Glow.Back />}
      <input
        className='absolute inset-0 pointer-events-none opacity-0'
        type='submit'
        disabled={isDisabled}
      />
      <motion.h4
        className='submit-text'
        transition={EFFECT_ANIMATE_TRANSITION}
        style={{
          letterSpacing: '0.00675em',
        }}
        variants={{
          animate: {
            letterSpacing: '0.00675em',
          },
          hover: {
            letterSpacing: '0.25em',
          },
        }}
      >
        {title}
      </motion.h4>
    </motion.label>
  );
};
