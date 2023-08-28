import { DEFAULT_EXT, WEBP_EXT } from '@constants/media';
import {
  resolveMediaDetails,
  resolveMediaRecord,
} from '@pages/projects/config';
import { TModuleEntries } from '@ops/screens/types/media';
import { TScreensLookup } from '@t/screens';
import { resolveWebpFilePath } from '../src/hooks/media/resolveFilePathByExt';

export type TResolveIndexedMediaConfig = {
  index: number;
  screensLookup: TScreensLookup;
};
export const resolveMediaRecordByIndex = async ({
  index,
  screensLookup,
}: TResolveIndexedMediaConfig) => {
  const entries: TModuleEntries = Object.entries(
    screensLookup[DEFAULT_EXT],
  );
  const [filePath, resolver] = entries[index];
  const webpFilePath = resolveWebpFilePath(filePath);
  const webpResolver =
    screensLookup[WEBP_EXT][webpFilePath];

  const mediaRecord = await resolveMediaRecord({
    png: {
      filePath,
      resolver,
      ...resolveMediaDetails(filePath),
    },
    webp: {
      filePath: webpFilePath,
      resolver: webpResolver,
      ...resolveMediaDetails(filePath),
    },
  });

  return mediaRecord;
};
