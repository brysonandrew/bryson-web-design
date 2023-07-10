import { Placeholder } from '@components/placeholder';
import { MID_MOTION_CONFIG } from '@constants/animation';
import { useMediaRecordGallery } from '@hooks/media/useMediaRecordGallery';
import { TModuleRecord } from '@t/media';
import { FC } from 'react';

type TProps = {
  moduleRecord: TModuleRecord;
};
export const Gallery: FC<TProps> = ({ moduleRecord }) => {
  useMediaRecordGallery({ moduleRecord });

  return (
    <Placeholder
      key='IMAGE_PLACEHOLDER'
      classValue='origin-top placeholder'
      {...MID_MOTION_CONFIG}
    />
  );
};
