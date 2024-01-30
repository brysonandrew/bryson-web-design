import { FC } from 'react';
import { Button } from './Button';
import { useSorted } from './useSorted';
import { TMediaRecords } from '@brysonandrew/media/config/types';

type TProps = {
  itemWidth: number;
  mediaRecords: TMediaRecords;
};
export const Items: FC<TProps> = ({
  mediaRecords,
  itemWidth,
}) => {
  const sortedItems = useSorted(mediaRecords);

  return (
    <>
      {sortedItems.map((mediaRecord) => (
        <Button
          key={mediaRecord.src}
          width={itemWidth}
          mediaRecord={mediaRecord}
        />
      ))}
    </>
  );
};
