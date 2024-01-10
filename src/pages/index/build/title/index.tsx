import { SECTION_RECORD } from '@app/routes/app';
import { AnimatePresence, motion } from 'framer-motion';
import { ShiftUp } from './ShiftUp';
export const WORDS = SECTION_RECORD.build.split(/\s/);

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
