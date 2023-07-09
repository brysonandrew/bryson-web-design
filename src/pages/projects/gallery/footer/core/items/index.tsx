import { FC } from 'react';
import { Button } from './Button';
import { useSorted } from './useSorted';
import { DEFAULT_EXT } from '@constants/media';
import { TMediaRecord } from '@t/media';
import { TImageRecordEntries } from '@t/screens';
import { resolveMediaDetails } from '@pages/projects/config';

type TProps = {
  itemWidth: number;
  items: TImageRecordEntries;
};
export const Items: FC<TProps> = ({ items, itemWidth }) => {
  const sortedItems = useSorted(items);
  return (
    <>
      {sortedItems.map(([filePath], index) => (
        <Button
          key={filePath}
          width={itemWidth}
          mediaDetails={resolveMediaDetails(filePath)}
          index={index}
        />
      ))}
    </>
  );
};
