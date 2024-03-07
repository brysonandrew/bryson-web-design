import { B, Button } from '@brysonandrew/interactive';
import type { FC } from 'react';
import printSrc from './print.png';

export const PrintInstructions: FC = () => {
  const handleClick = () => {
    window.print();
  };
  return (
    <div className='column-start gap-2 bg-black text-white text-sm py-8 px-12'>
      <div className='column-start'>
        <B title='Print' classValue='bg-gray-05 px-4' onClick={handleClick}>
          <div className='font-semibold'>Print</div>
        </B>
      </div>
      <div className='column-start'>
        <div className='font-semibold'>Print settings:</div>
        <div>
          <img
            src={printSrc}
            alt='Print Instructions'
            width={280}
          />
        </div>
      </div>
    </div>
  );
};
