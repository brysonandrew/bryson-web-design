import { Placeholder } from '@components/placeholder';
import { MID_MOTION_CONFIG } from '@constants/animation';
import {
  TMediaRecordBuildConfig,
  useMediaRecordBuild,
} from '@hooks/media/useMediaRecordBuild';
import { FC } from 'react';

type TProps = TMediaRecordBuildConfig;
export const Build: FC<TProps> = (props) => {
  useMediaRecordBuild(props);

  return (
    <Placeholder
      key='IMAGE_PLACEHOLDER'
      classValue='origin-top placeholder'
      {...MID_MOTION_CONFIG}
    />
  );
};
