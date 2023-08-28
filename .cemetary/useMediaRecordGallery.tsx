import { useEffect } from 'react';
import { resolveMediaRecord } from '@pages/projects/config';
import { useGallery } from '@context/domains/gallery';

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
