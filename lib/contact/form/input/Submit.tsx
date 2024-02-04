import clsx from 'clsx';
import { motion } from 'framer-motion';
import { useEffect, type FC, useRef } from 'react';
import {
  resolveButtonValue,
  useContact,
} from '@brysonandrew/contact';
import { useHoverKey } from '@brysonandrew/cursor';
import {
  TRANSITION_02_EASEIN_008,
  resolveParentAnimateConfig,
} from '@brysonandrew/animation';
import { BIGGER_CURSOR_KEY } from '@brysonandrew/cursor/config/constants';
import { useApp } from '@brysonandrew/app';
import { NOOP } from '@brysonandrew/utils';

type TProps = { isDisabled?: boolean };
export const Submit: FC<TProps> = ({ isDisabled }) => {
  const { BORDER_RADIUS, LIGHT, Back, sounds } = useApp();
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
      className={clsx(
        '_contact_submit',
        isDisabled
          ? 'cursor-not-allowed'
          : 'cursor-pointer',
      )}
      layout
      onTap={isDisabled ? () => null : sounds?.move ?? NOOP}
      {...(isDisabled
        ? {}
        : resolveParentAnimateConfig({ isHover }))}
      style={{
        borderRadius: BORDER_RADIUS.MD,
      }}
      {...handlers}
    >
      {LIGHT ? <LIGHT.Back /> : <Back />}
      <input
        className='fill pointer-events-none opacity-0'
        type='submit'
        disabled={isDisabled}
      />
      <motion.h4
        className='_contact_submit-text'
        transition={TRANSITION_02_EASEIN_008}
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
