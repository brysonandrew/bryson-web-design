import { Responsive } from '@components/placeholder/Responsive';
import { resolveKey } from '@components/placeholder/resolveKey';
import { useMediaRecordGallery } from '@hooks/media/useMediaRecordGallery';
import { TModuleRecord } from '@t/media';
import { FC } from 'react';

type TProps = {
  moduleRecord: TModuleRecord;
};
export const Gallery: FC<TProps> = ({ moduleRecord }) => {
  useMediaRecordGallery({ moduleRecord });

  return (
    <Responsive
      key={resolveKey(moduleRecord.png.filePath)}
    />
  ); 
};
