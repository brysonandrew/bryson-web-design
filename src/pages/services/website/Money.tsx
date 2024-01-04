import { nToMoney } from '@utils/format';
import { FC } from 'react';

type TProps = {
  children: number;
};
export const Money: FC<TProps> = ({ children }) => {
  return (
    <span className='font-display text-baby-blue'>
      {nToMoney(children)}
    </span>
  );
};
