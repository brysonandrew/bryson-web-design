import { useApp } from '@brysonandrew/app';
import { TChildrenString } from '@brysonandrew/config-types/dom/main';
import { AnimatePresence } from 'framer-motion';
import { FC } from 'react';
import { ShiftUp } from './ShiftUp';

export const Animation: FC<TChildrenString> = ({
  children,
}) => {
  const { COLOR } = useApp();
  return (
    <AnimatePresence>
      {children.split(/\s/).map((word, index) => (
        <ShiftUp
          key={word}
          staggerIndex={index}
          baseDuration={0.6}
        >
          {index % 2 === 0 ? (
            <span className='font-normal'>{word}</span>
          ) : (
            <span
              className='font-black'
              style={{ color: COLOR.primary }}
            >
              {word}
            </span>
          )}
        </ShiftUp>
      ))}
    </AnimatePresence>
  );
};
