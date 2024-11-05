import { Drag } from '@brysonandrew/gallery-viewer/icons/Drag';
import { cx } from 'class-variance-authority';
import { motion } from 'framer-motion';
import { FC } from 'react';
import { useHover } from '@brysonandrew/motion-cursor';
import { BIG_CURSOR_KEY } from '@brysonandrew/motion-cursor/config/constants';
import { resolveParentAnimateConfig } from '@brysonandrew/motion-core';
import { TDivMotionProps } from '@brysonandrew/config-types';
import { Glow } from '@brysonandrew/layout-effects';

type TProps = TDivMotionProps;
export const DragIcon: FC<TProps> = ({
  classValue,
  ...props
}) => {
  const { isHover, handlers } = useHover(
    BIG_CURSOR_KEY,
    'drag',
  );

  return (
    <motion.div
      className={cx(
        'hidden absolute bottom-0 h-full cursor-grab active:cursor-grabbing md:flex',
        classValue,
      )}
      {...resolveParentAnimateConfig({ isHover })}
      {...handlers}
      {...props}
    >
      <div className='fill center'>
        <Glow drop={10} color='white' classValue='center'>
          <Drag />
        </Glow>
      </div>
    </motion.div>
  );
};
