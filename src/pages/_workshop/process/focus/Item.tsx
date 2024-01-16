import { CUSTOM_CURSOR_KEY } from '@lib/cursor/switch/config';
import { useHoverKey } from '@lib/cursor/hooks/useHoverKey';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { FC, PropsWithChildren } from 'react';
import { useApp } from '@lib/context/app/useApp';

type TProps = PropsWithChildren<{
  id: string;
}>;
export const Item: FC<TProps> = ({ id, children }) => {
  const { BORDER_RADIUS } = useApp();
  const { handlers, isHover } = useHoverKey(
    CUSTOM_CURSOR_KEY,
    id,
  );
  return (
    <motion.div
      className='relative py-1 px-2'
      {...handlers}
    >
      <motion.div
        className={clsx(
          'absolute -inset-1 center pointer-events-none',
          isHover ? 'bg-secondary-02 z-50' : '',
        )}
        style={{ borderRadius: BORDER_RADIUS.MD }}
      />
      <div className='relative row gap-2'>{children}</div>
    </motion.div>
  );
};
