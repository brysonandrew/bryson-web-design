import type { FC } from 'react';
import { List } from '../List';
import { Item } from '../Item';

const ITEMS = [
  { title: 'Bryson' },
  { title: 'Web Design', isActive: true },
] as const;

export const Title: FC = () => {
  return (
    <List>
      {ITEMS.map((item) => (
        <Item key={item.title} {...item} />
      ))}
    </List>
  );
};
