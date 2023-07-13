import { useEffect } from 'react';
import { TModuleRecord } from '@t/media';
import { resolveMediaRecord } from '@pages/projects/config';
import { useContext } from '@state/Context';

export type TMediaRecordGalleryConfig = {
  moduleRecord: TModuleRecord;
};
export const useMediaRecordGallery = ({
  moduleRecord,
}: TMediaRecordGalleryConfig) => {
  const { dispatch } = useContext();
  const { project, filePath } = moduleRecord.png;

  useEffect(() => {
    const init = async () => {
      const mediaRecord = await resolveMediaRecord(
        moduleRecord,
      );

      dispatch({
        type: 'project-image-record',
        value: {
          project,
          filePath,
          mediaRecord,
        },
      });
    };
    init();

  }, [moduleRecord]);
};
