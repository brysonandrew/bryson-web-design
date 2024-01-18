import { TMediaMetadata, TMediaRecord } from 'lib/media/picture/config/types';
import { resolveFsInfo } from './resolveFsInfo';
import { removePublicDir } from './write';


export type TResolveMediaConfig = TMediaMetadata & {
  webpEntry: string;
  entry: string;
};
export const resolveMediaRecord = ({
  webpEntry,
  entry,
  width,
  height,
}: TResolveMediaConfig): TMediaRecord | null => {
  const { dir, name, ext } = resolveFsInfo(entry);
  if (
    typeof width !== 'undefined' &&
    typeof height !== 'undefined'
  ) {
    entry = removePublicDir(entry);
    webpEntry = removePublicDir(webpEntry);
    const record: TMediaRecord = {
      src: entry,
      alt: name,
      project: dir,
      name,
      dir,
      width,
      height,
      sources: [
        {
          type: 'image/webp',
          srcSet: webpEntry,
        },
        {
          type: `image/${ext}`,
          srcSet: entry,
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
