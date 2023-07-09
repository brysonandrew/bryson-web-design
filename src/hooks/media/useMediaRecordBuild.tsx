import { useEffect } from 'react';
import { TModuleRecord } from '@t/media';
import { resolveMediaRecord } from '@pages/projects/config';
import { useContext } from '@state/Context';

export type TMediaRecordBuildConfig = {
  index: number;
  moduleRecord: TModuleRecord;
};
export const useMediaRecordBuild = ({
  index,
  moduleRecord,
}: TMediaRecordBuildConfig) => {
  const { buildImages, dispatch } = useContext();

  useEffect(() => {
    const init = async () => {
      const mediaRecord = await resolveMediaRecord(
        moduleRecord as TModuleRecord,
      );
      const value = [...buildImages];
      value[index] = mediaRecord;

      dispatch({
        type: 'build-images',
        value,
      });
    };
    init();
  }, [moduleRecord, index]);
};
