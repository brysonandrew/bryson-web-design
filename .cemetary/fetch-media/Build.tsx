import { Small as Placeholder } from '@components/placeholder/Small';
import { resolveKey } from '@components/placeholder/resolveKey';
import {
  TMediaRecordBuildConfig,
  useMediaRecordBuild,
} from '@hooks/media/useMediaRecordBuild';
import { FC } from 'react';

type TProps = TMediaRecordBuildConfig;
export const Build: FC<TProps> = (props) => {
  useMediaRecordBuild(props);

  return <Placeholder key={resolveKey(props.index)} />;
};

