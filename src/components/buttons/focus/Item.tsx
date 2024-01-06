import { FOCUS_CURSOR_KEY } from '@components/cursor/switch/config';
import { useHoverKey } from '@hooks/cursor/useHoverKey';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { FC, PropsWithChildren } from 'react';

type TProps = PropsWithChildren<{
  id: string;
}>;
export const Item: FC<TProps> = ({ id, children }) => {
  const { handlers, isHover } = useHoverKey(
    FOCUS_CURSOR_KEY,
    id,
  );
  return (
    <motion.div
      className='relative py-1 px-2 text-color-3'
      {...handlers}
    >
      <motion.div
        className={clsx(
          'absolute -inset-1 center rounded-md pointer-events-none',
          isHover ? 'bg-teal-02 z-50' : '',
        )}
      />
      <div className='relative row gap-2'>{children}</div>
    </motion.div>
  );
};
