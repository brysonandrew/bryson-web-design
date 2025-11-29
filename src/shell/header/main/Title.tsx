import type { FC } from 'react';
import { Item } from '../Item';

const ITEMS = [
  { title: 'brysona.dev' },
  { title: 'Front-End Developer', isActive: true },
] as const;

export const Title: FC = () => {
  return (
    <ul className="row gap-1">
      {ITEMS.map((item) => (
        <Item key={item.title} {...item} />
      ))}
    </ul>
  );
};
