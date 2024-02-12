import { TChildrenString } from '@brysonandrew/config-types/dom/main';
import { AnimatePresence, motion } from 'framer-motion';
import { FC } from 'react';
import { ShiftUp } from './ShiftUp';

export const Animation: FC<TChildrenString> = ({
  children,
}) => {
  return (
    <AnimatePresence>
      {children.split(/\s/).map((word, index) => (
        <ShiftUp
          key={word}
          staggerIndex={index}
          baseDelay={.2}
        >
          {index % 2 === 0 ? (
            <span className='font-normal'>{word}</span>
          ) : (
            <span className='text-primary font-black'>
              {word}
            </span>
          )}
        </ShiftUp>
      ))}
    </AnimatePresence>
  );
};
