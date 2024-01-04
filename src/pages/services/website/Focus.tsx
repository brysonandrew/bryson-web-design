import { useCursor } from '@context/cursor';
import { FC } from 'react';
import { BASE, TSection } from './config';

type TProps = {
  children: TSection;
};
export const Focus: FC<TProps> = ({ children }) => {
  const {
    hoverKeyParts: [_, first],
  } = useCursor();
  return (
    <>
      {children === first && (
        <div className='absolute -inset-1 bg-baby-blue-02 rounded-md' />
      )}
      <div className='absolute right-full top-1/2 -translate-y-1/2 w-5 h-5 mr-2 center rounded-full bg-main text-main font-slab text-xs'>
        {BASE.indexOf(children) + 1}
      </div>
    </>
  );
};
