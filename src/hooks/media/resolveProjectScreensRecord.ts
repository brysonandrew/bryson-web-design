import { PNG_EXT, WEBP_EXT } from '@constants/media';
import { resolveMediaDetails } from '@pages/projects/config';
import { TFilePathKey } from '@t/media';
import {
  TProjectImageResolverRecord,
  TScreensLookup,
} from '@t/screens';
import { resolveWebpFilePath } from './resolveFilePathByExt';

export const resolveProjectImageResolverRecord = (
  screensLookup: TScreensLookup,
) =>
  Object.keys(screensLookup[PNG_EXT]).reduce(
    (a: TProjectImageResolverRecord, filePath: TFilePathKey) => {
      const details = resolveMediaDetails(filePath);
      const webpFilePath = resolveWebpFilePath(filePath);

      a[details.project] = {
        ...(a[details.project] ?? []),
        [filePath]: {
          [PNG_EXT]: {
            filePath,
            resolver: screensLookup[PNG_EXT][filePath],
            ...details,
          },
          [WEBP_EXT]: {
            filePath: webpFilePath,
            resolver: screensLookup[WEBP_EXT][webpFilePath],
            ...details,
          },
        },
      };

      return a;
    },
    {},
  );
