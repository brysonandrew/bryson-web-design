import { TProjectKey } from '@constants/projects';
import { resolveMediaRecord } from '@pages/projects/config';
import { useContext } from '@state/Context';
import { TUpdateProjectImageRecord } from '@state/types';
import { TImageRecord } from '@t/screens';

type TUpdateRecord = {
  currProject: TProjectKey;
  nextRecord: TImageRecord;
};
export const useMediaFromKey = () => {
  const {
    projectImageResolverRecord,
    projectImageRecord,
    dispatch,
  } = useContext();

  const updateRecord = (
    value: TUpdateProjectImageRecord,
  ) => {
    dispatch({
      type: 'project-image-record',
      value,
    });
  };

  const handleLoad = async (currProject: TProjectKey) => {
    try {
      const imageRecord = projectImageRecord[currProject];
      const resolverRecord =
        projectImageResolverRecord[currProject];
      const nextRecord: TImageRecord = {};
      const entries = Object.entries(resolverRecord);

      for await (const entry of entries) {
        const [filePath, value] = entry;
        if (imageRecord?.[filePath]) continue;

        const mediaRecord = await resolveMediaRecord({
          png: value.png,
          webp: value.webp,
        });
        nextRecord[filePath] = mediaRecord;

        updateRecord({
          project: currProject,
          filePath,
          mediaRecord,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return handleLoad;
};
