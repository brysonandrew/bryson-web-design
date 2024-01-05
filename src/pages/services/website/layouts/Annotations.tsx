import { TChildren } from '@t/index';
import { FC } from 'react';

type TProps = {
  breakdown: TChildren;
  diagram: TChildren;
};
export const Annotations: FC<TProps> = ({
  breakdown,
  diagram,
}) => {
  return (
    <div className='column-end gap-8 w-full md:row-start'>
      <div className='column w-full items-stretch gap-8 md:w-5/12'>
        {breakdown}
      </div>
      <div className='w-full md:w-7/12'>{diagram}</div>
    </div>
  );
};
