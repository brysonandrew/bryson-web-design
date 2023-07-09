import { FC } from 'react';
import { Button } from './Button';
import { useSorted } from './useSorted';
import { DEFAULT_EXT } from '@constants/media';
import { TMediaRecord } from '@t/media';

type TProps = {
  itemWidth: number;
  items: TMediaRecord[];
};
export const Items: FC<TProps> = ({ items, itemWidth }) => {
  const sortedItems = useSorted(items);
  return (
    <>
      {sortedItems.map((media: TMediaRecord, index) => (
        <Button
          key={media[DEFAULT_EXT].key}
          width={itemWidth}
          mediaRecord={media}
          index={index}
        />
      ))}
    </>
  );
};
