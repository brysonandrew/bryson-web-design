import { PNG_EXT, WEBP_EXT } from '@constants/media';
import {
  TScreensLookup,
  TResolverRecordEntry,
} from '@t/screens';
import { resolveWebpFilePath } from './resolveFilePathByExt';
import { resolveMediaDetails } from '@pages/projects/config';

export const resolveModuleRecord = (
  entry: TResolverRecordEntry,
  lookup: TScreensLookup,
) => {
  const [filePath, resolver] = entry;
  const webpFilePath = resolveWebpFilePath(filePath);
  const moduleRecord = {
    [PNG_EXT]: {
      filePath,
      resolver,
      ...resolveMediaDetails(filePath),
    },
    [WEBP_EXT]: {
      filePath: webpFilePath,
      resolver: lookup[WEBP_EXT][webpFilePath],
      ...resolveMediaDetails(webpFilePath),
    },
  };

  return moduleRecord;
};
