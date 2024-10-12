import { NONE_CURSOR_KEY } from '@brysonandrew/motion-cursor/config/constants';
import { useHover } from '@brysonandrew/motion-cursor/hooks/useHover';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { FC, PropsWithChildren } from 'react';
import { useApp } from '@brysonandrew/app';

type TProps = PropsWithChildren<{
  id: string;
}>;
export const Item: FC<TProps> = ({ id, children }) => {
  const { BORDER_RADIUS, COLOR } = useApp();
  const { handlers, isHover } = useHover(
    NONE_CURSOR_KEY,
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
          isHover ? 'z-50' : '',
        )}
        style={{
          borderRadius: BORDER_RADIUS.MD,
          color: COLOR['primary-02'],
        }}
      />
      <div className='relative row gap-2'>{children}</div>
    </motion.div>
  );
};
