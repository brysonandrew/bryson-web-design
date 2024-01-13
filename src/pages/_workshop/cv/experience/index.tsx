import { Item } from './Item';
import type { TItem } from '@pages/projects/config/types';
import { CV_ITEMS } from '../constants';

export const Experience = () => (
  <ul className='column-stretch w-full'>
    {CV_ITEMS.map((item: TItem, index) => (
      <Item key={item.title} {...item} index={index} />
    ))}
  </ul>
);
