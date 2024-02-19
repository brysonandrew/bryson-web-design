import clsx from 'clsx';
import { motion } from 'framer-motion';
import { useEffect, type FC, useRef } from 'react';
import {
  resolveButtonValue,
  useContact,
} from '@brysonandrew/contact';
import { useHoverKey } from '@brysonandrew/cursor';
import { resolveParentAnimateConfig } from '@brysonandrew/animation';
import { BIGGER_CURSOR_KEY } from '@brysonandrew/cursor/config/constants';
import { useApp } from '@brysonandrew/app';
import { NOOP } from '@brysonandrew/utils';

type TProps = { isDisabled?: boolean };
export const Submit: FC<TProps> = ({ isDisabled }) => {
  const {
    BORDER_RADIUS,
    LIGHT,
    Back: _Back,
    sounds,
  } = useApp();
  const Back = LIGHT?.Back ?? _Back;
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
        '_contact_submit group',
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
      <Back />
      <input
        className='fill pointer-events-none opacity-0'
        type='submit'
        disabled={isDisabled}
      />
      <h4 className='_contact_submit-text'>
        {title}
      </h4>
    </motion.label>
  );
};
