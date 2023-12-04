import { PathLike, promises as fs } from 'fs';
import fg from 'fast-glob';
import sharp, { Metadata, OutputInfo } from 'sharp';
import {
  IMAGES_GLOB,
  SMALL_W,
  SMALL_SUFFIX,
  LOOKUP_PATH,
  LOOKUP_SMALL_PATH,
  PRECACHE_PATH,
} from './config';
import { resolveFsInfo } from './utils/resolveFsInfo';
import { TMediaRecords } from './types/media';
import { resolveMediaRecord } from './utils/resolveMediaRecord';
import { TScreensRecord } from './types';
import { removePublicDir } from './utils';

const resolveSmallEntry = (path: string, ext = 'png') =>
  `${path}${SMALL_SUFFIX}.${ext}`;

const writeFileData = (path: string, data: object) => {
  fs.writeFile(path, JSON.stringify(data));
};

const resolveMetaDataFile = async (
  entry: any,
  path: string,
  extra = {},
): Promise<Metadata> => {
  const result: Metadata = await sharp(entry).metadata();
  writeFileData(path, { ...result, ...extra });
  return result;
};

const resolveWebp = async (entry: any, path: string) => {
  const webpEntry = `${path}.webp`;
  const webp: OutputInfo = await sharp(entry)
    .webp({ lossless: true })
    .toFile(webpEntry);
  writeFileData(`${path}-output-webp.md`, webp);

  return webpEntry;
};

(async () => {
  try {
    const projectRecord: TScreensRecord = {};
    const smallRecords: TMediaRecords = [];

    const entries = await fg([IMAGES_GLOB]);
    const originals = entries.map((entry) =>
      removePublicDir(entry),
    );
    const smalls = originals.map((entry) =>
      resolveSmallEntry(entry, 'png'),
    );
    writeFileData(PRECACHE_PATH, [...smalls, ...originals]);
    for await (const entry of entries) {
      const { dir, path, ext } = resolveFsInfo(entry);

      const originalMetaData = await resolveMetaDataFile(
        entry,
        `${path}-meta.md`,
      );

      const webpEntry = await resolveWebp(entry, path);

      const record = resolveMediaRecord({
        entry,
        webpEntry,
        ...originalMetaData,
      });

      if (record) {
        projectRecord[dir] = [
          ...(projectRecord[dir] ?? []),
          record,
        ];
      }

      const smallEntry = resolveSmallEntry(path, ext);
      const small: OutputInfo = await sharp(entry)
        .resize({ width: SMALL_W })
        .toFile(smallEntry);

      const smallMeta = await resolveMetaDataFile(
        smallEntry,
        `${path}-meta-output-${SMALL_SUFFIX}.md`,
        small,
      );

      const webpSmallEntry = await resolveWebp(
        smallEntry,
        `${path}${SMALL_SUFFIX}`,
      );

      const smallRecord = resolveMediaRecord({
        entry: smallEntry,
        webpEntry: webpSmallEntry,
        ...smallMeta,
      });

      if (smallRecord) {
        smallRecords.push(smallRecord);
      }
    }
    writeFileData(LOOKUP_SMALL_PATH, smallRecords);
    writeFileData(LOOKUP_PATH, projectRecord);
  } catch (error) {
    console.error(error);
  }
})();
