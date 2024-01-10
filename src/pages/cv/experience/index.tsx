import { Item } from './Item';
import type { TItem } from '@pages/projects/config/types';
import { CV_ITEMS } from '../constants';

export const Experience = () => (
  <ul className='w-full column items-stretch'>
    {CV_ITEMS.map((item: TItem, index) => (
      <Item key={item.title} {...item} index={index} />
    ))}
  </ul>
);
