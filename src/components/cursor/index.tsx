import type { FC } from 'react';
import { MotionValue, motion } from 'framer-motion';
import { OpenInNew } from '@components/icons/OpenInNew';
import { PRESENCE_SCALE } from '@constants/animation';

const SIZE = 28;
const HALF = SIZE * 0.6;

type TProps = {
  cursorX: MotionValue;
  cursorY: MotionValue;
};
export const Cursor: FC<TProps> = ({
  cursorX,
  cursorY,
}) => {
  return (
    <motion.div
      className='center absolute p-0 background-color-2 overflow-hidden pointer-events-none z-20'
      style={{
        width: SIZE,
        height: SIZE,
        top: -HALF,
        left: -HALF,
        x: cursorX,
        y: cursorY,
      }}
      {...PRESENCE_SCALE}
    >
      <OpenInNew classValue='relative text-color-2' />
    </motion.div>
  );
};
