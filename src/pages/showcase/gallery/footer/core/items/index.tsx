import { TMedia } from '@pages/showcase/config';
import { FC } from 'react';
import { Button } from './Button';
import { useSorted } from './useSorted';

type TProps = {
  itemWidth: number;
  items: TMedia[];
};
export const Items: FC<TProps> = ({ items, itemWidth }) => {
  const sortedItems = useSorted(items);
  return (
    <>
      {sortedItems.map((media: TMedia) => (
        <Button width={itemWidth} {...media} />
      ))}
    </>
  );
};
