import { Drag } from '@brysonandrew/gallery-viewer/icons/Drag';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { FC } from 'react';
import { useHoverKey } from '@brysonandrew/cursor';
import { BIG_CURSOR_KEY } from '@brysonandrew/cursor/config/constants';
import { resolveParentAnimateConfig } from '@brysonandrew/animation';
import { Glow } from '@brysonandrew/filter-animate';
import { TDivMotionProps } from '@brysonandrew/types';

type TProps = TDivMotionProps;
export const DragIcon: FC<TProps> = ({
  classValue,
  ...props
}) => {
  const { isHover, handlers } = useHoverKey(
    BIG_CURSOR_KEY,
    'drag',
  );

  return (
    <motion.div
      className={clsx(
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
