import { resolveFsInfo } from './resolveFsInfo';
import type {
  TMediaMetadata,
  TMediaRecord,
} from '../types/media';
import { removePublicDir } from '.';

export type TResolveMediaConfig = TMediaMetadata & {
  webpEntry: string;
  entry: string;
};
export const resolveMediaRecord = ({
  webpEntry,
  entry,
  width,
  height,
  ...metadata
}: TResolveMediaConfig): TMediaRecord | null => {
  const { dir, name, ext } = resolveFsInfo(entry);
  if (
    typeof width !== 'undefined' &&
    typeof height !== 'undefined'
  ) {
    entry = removePublicDir(entry);
    webpEntry = removePublicDir(webpEntry);
    const record: TMediaRecord = {
      metadata,
      src: entry,
      alt: name,
      project: dir,
      name,
      dir,
      width,
      height,
      sources: [
        {
          type: `image/${ext}`,
          media: `(min-width: 1px)`,
          srcSet: entry,
        },
        {
          type: 'image/webp',
          media: `(min-width: 1px)`,
          srcSet: webpEntry,
        },
      ],
    };
    return record;
  } else {
    console.error(
      "Metadata didn't contain dimensions info for ",
      entry,
    );
    return null;
  }
};
