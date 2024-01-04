import { useCursor } from '@context/cursor';
import { FC } from 'react';
import { Circle } from './Circle';
import { ALL, TPart } from './config';

type TProps = {
  children: TPart;
};
export const Focus: FC<TProps> = ({ children }) => {
  const {
    hoverKeyParts: [_, first],
  } = useCursor();
  return (
    <>
      {children === first && (
        <div className='absolute -inset-1 bg-baby-blue-02 rounded-md pointer-events-none' />
      )}
      <Circle classValue='absolute right-full top-1/2 -translate-y-1/2 mr-2 pointer-events-none'>
        {ALL.indexOf(children) + 1}
      </Circle>
    </>
  );
};
