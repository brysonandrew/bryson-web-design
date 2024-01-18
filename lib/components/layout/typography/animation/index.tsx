import { TChildrenString } from 'lib/types/dom/main';
import { AnimatePresence, motion } from 'framer-motion';
import { FC } from 'react';
import { ShiftUp } from './ShiftUp';

export const Animation: FC<TChildrenString> = ({
  children,
}) => {
  return (
    <AnimatePresence>
      {children.split(/\s/).map((word, index) => (
        <motion.div
          key={word}
          className='row overflow-hidden'
        >
          {index % 2 === 0 ? (
            <ShiftUp
              classValue='font-extralight'
              staggerIndex={index}
            >
              {word}
            </ShiftUp>
          ) : (
            <ShiftUp
              classValue='text-secondary font-black'
              staggerIndex={index}
            >
              {word}
            </ShiftUp>
          )}
        </motion.div>
      ))}
    </AnimatePresence>
  );
};
