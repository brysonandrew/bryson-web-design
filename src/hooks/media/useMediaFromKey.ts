import { TProjectKey } from '@constants/projects';
import { resolveMediaRecord } from '@pages/projects/config';
import { useContext } from '@state/Context';
import {
  TMediaRecord,
  TMediaRecords,
  TModuleRecord,
} from '@t/media';
import { TImageRecord } from '@t/screens';

const resolveRecord = (
  value: TModuleRecord,
): Promise<TMediaRecord> =>
  resolveMediaRecord({
    png: value.png,
    webp: value.webp,
  });

export const useMediaFromKey = () => {
  const {
    projectImageResolverRecord,
    projectImageRecord,
    dispatch,
  } = useContext();
  const nextRecord: TImageRecord = {};

  const update = (
    project: TProjectKey,
    filePath: string,
    mediaRecord: TMediaRecord,
  ) => {
    nextRecord[filePath] = mediaRecord;
    dispatch({
      type: 'project-image-record',
      value: {
        project,
        filePath,
        mediaRecord,
      },
    });
  };

  const handleLoad = async (currProject: TProjectKey) => {
    const resolveValue = async (value: TModuleRecord) => {
      const promise = resolveRecord(value);
      return promise;
    };
    const imageRecord = projectImageRecord[currProject];
    const resolverRecord =
      projectImageResolverRecord[currProject];
    const entries = Object.entries(resolverRecord);

    const keys: string[] = [];
    let records: TMediaRecords = [];

    const promises = entries.reduce(
      (a: Promise<TMediaRecord>[], [key, value]) => {
        if (!imageRecord?.[key]) {
          keys.push(key);
          const promise = resolveValue(value);
          a.push(promise);
        }
        return a;
      },
      [],
    );
    try {
      records = await Promise.all(promises);
    } catch (error) {
      console.error(error);
    }

    records.forEach((record, index) => {
      const filePath = keys[index];
      update(currProject, filePath, record);
    });
  };

  return handleLoad;
};
