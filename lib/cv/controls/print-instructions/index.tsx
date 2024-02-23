import type { FC } from 'react';
import printSrc from './print.png';

export const PrintInstructions: FC = () => {
  return (
    <div className='column-start gap-2 bg-black text-white text-sm py-8 px-12'>
      <div className='font-semibold'>
        Print instructions:
      </div>
      <div>
        <img
          src={printSrc}
          alt='Print Instructions'
          width={280}
        />
      </div>
    </div>
  );
};
