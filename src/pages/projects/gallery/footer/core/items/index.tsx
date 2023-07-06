import {
  DEFAULT_EXT,
  TMedia,
  TMediaRecord,
} from '@pages/projects/config';
import { FC } from 'react';
import { Button } from './Button';
import { useSorted } from './useSorted';

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
