import { useEffect } from 'react';
import { TModuleRecord } from '@t/media';
import { resolveMediaRecord } from '@pages/projects/config';
import { useContext } from '@context/domains/build/Context';

export type TMediaRecordBuildConfig = {
  index: number;
  moduleRecord: TModuleRecord;
};
export const useMediaRecordBuild = ({
  index,
  moduleRecord,
}: TMediaRecordBuildConfig) => {
  const { dispatch } = useContext();

  useEffect(() => {
    const init = async () => {
      const mediaRecord = await resolveMediaRecord(
        moduleRecord as TModuleRecord,
      );

      dispatch({
        type: 'build-image-record',
        value: { index, mediaRecord },
      });
    };
    init();
  }, [moduleRecord, index]);
};
