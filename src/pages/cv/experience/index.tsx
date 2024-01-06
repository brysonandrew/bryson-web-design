import { CV_ITEMS } from '@constants/projects/cv';
import { Item } from './Item';
import type { TItem } from '@t/projects';

export const Experience = () => (
  <ul>
    {CV_ITEMS.map((item: TItem, index) => (
      <Item key={item.title} {...item} index={index} />
    ))}
  </ul>
);
