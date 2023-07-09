import {
  TMediaRecordBuildConfig,
  useMediaRecordBuild,
} from '@hooks/media/useMediaRecordBuild';
import { FC } from 'react';

type TProps = TMediaRecordBuildConfig;
export const Build: FC<TProps> = (props) => {
  useMediaRecordBuild(props);

  return null;
};
