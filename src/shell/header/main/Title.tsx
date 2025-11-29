import type { FC } from 'react';
import { Item } from '../Item';

const ITEMS = [
  { title: 'brysona.dev', isActive: true },
  { title: 'Front-End Developer' },
] as const;

export const Title: FC = () => {
  return (
    <ul className="flex flex-col items-start gap-4 lg:flex-row lg:gap-1">
      {ITEMS.map((item) => (
        <Item key={item.title} {...item} />
      ))}
    </ul>
  );
};
