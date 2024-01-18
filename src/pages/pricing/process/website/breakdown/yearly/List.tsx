import { YEARLY } from '../../config';
import { Money } from '../../Money';

export const List = () => {
  return (
    <ul className='column-end w-full'>
      {YEARLY.map(([item, price]) => {
        return (
          <li key={item} className='w-full row-space'>
            <span>{item}</span> <Money>{price}</Money>
          </li>
        );
      })}
    </ul>
  );
};
