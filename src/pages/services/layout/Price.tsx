import { nToMoney } from '@utils/format';
import { FC } from 'react';

export type TProps = {
  price: number | string;
};
export const Price: FC<TProps> = ({ price }) => {
  const isText =
    typeof price === 'string' && isNaN(Number(price));

  if (isText) {
    return (
      <h5 className='text-base text-center whitespace-pre-line'>
        {price.split(':').join(':\n')}
      </h5>
    );
  }
  return (
    <h5 className='text-xl'>
      {`${nToMoney(Number(price))}`}
    </h5>
  );
};
