import { FC } from 'react';
import { Button } from './Button';
import { useSorted } from './useSorted';
import { TMediaRecords } from 'lib/media/picture/config/types';

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
      {sortedItems.map((mediaRecord, index) => (
        <Button
          key={mediaRecord.src}
          width={itemWidth}
          mediaRecord={mediaRecord}
          index={index}
        />
      ))}
    </>
  );
};
