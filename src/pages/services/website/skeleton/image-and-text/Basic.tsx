import { FC } from 'react';
import { Normal } from './variants/Normal';
import { Reversed } from './variants/Reversed';

type TProps = { count?: number };
export const Basic: FC<TProps> = ({ count = 1 }) => {
  const ARR = [...Array(count)];
  return (
    <>
      {ARR.map((_, index) => {
        const Item = index % 2 === 0 ? Normal : Reversed;
        return (
          <div key={`${index}`} className='relative w-full'>
            <Item />
          </div>
        );
      })}
    </>
  );
};
