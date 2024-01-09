import { PRESENCE_Y_SHIFT } from '@constants/animation';
import { SECTION_TITLES } from '@constants/copy';
import { AnimatePresence, motion } from 'framer-motion';
import { ShiftUp } from './ShiftUp';
export const WORDS = SECTION_TITLES.build.split(/\s/);

export const Title = () => {
  return (
    <AnimatePresence>
      {WORDS.map((word, index) => (
        <motion.div
          key={word}
          className='row overflow-hidden'
        >
          {index % 2 === 0 ? (
            <ShiftUp
              classValue='font-thin'
              staggerIndex={index}
            >
              {word}
            </ShiftUp>
          ) : (
            <ShiftUp
              classValue='text-teal font-black'
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
