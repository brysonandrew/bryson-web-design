import { YEARLY } from './config';
import { Money } from './Money';

export const Yearly = () => {
  return (
    <ul className='column-end w-full'>
      {YEARLY.map(([item, price, moneyProps]) => {
        return (
          <li key={item} className='w-full row-space'>
            <span>{item}</span>{' '}
            <Money {...moneyProps}>{price}</Money>
          </li>
        );
      })}
    </ul>
  );
};
