import type { FC } from 'react';
import { Item } from '../Item';

const ITEMS = [
  { title: 'Bryson' },
  { title: 'Web Design', isActive: true },
] as const;

export const Title: FC = () => {
  return (
    <ul className='row gap-2.5'>
      {ITEMS.map((item) => (
        <Item key={item.title} {...item} />
      ))}
    </ul>
  );
};
