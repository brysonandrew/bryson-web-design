import { Item } from './Item';
import { CV_ITEMS } from '../config/constants';
import { TInitItem } from '@app/gallery/types';

export const Experience = () => (
  <ul className='column-stretch w-full'>
    {CV_ITEMS.map((item: TInitItem, index) => (
      <Item key={item.title} {...item} index={index} />
    ))}
  </ul>
);
