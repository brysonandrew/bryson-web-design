import { green } from '@ops/console';
import {
  PUBLIC_DIR,
  SMALL_SUFFIX,
  SCREENS_DIR,
  PRECACHE_PATH,
} from '@ops/screens/process/constants';
import { promises as fs } from 'fs';
import sharp, { Metadata, OutputInfo } from 'sharp';

export { resolveFsInfo } from './resolveFsInfo';
export { resolveMediaRecord } from './resolveMediaRecord';

const PUBLIC_DIR_REGEXP = new RegExp(`${PUBLIC_DIR}/`);
export const removePublicDir = (entry: string) =>
  entry.replace(PUBLIC_DIR_REGEXP, '');

export const writeFileData = async (
  path: string,
  data: object,
) => {
  console.log(green(`writing to ${path}.\nfullPath`));
  // const fullPath = prependPwd(path);
  await fs.writeFile(path, JSON.stringify(data, null, 2));
  console.log(green(`wrote to ${path}`));
  return true;
};

export const resolveSmallEntry = (
  path: string,
  ext = 'png',
) => `${path}${SMALL_SUFFIX}.${ext}`;

export const resolveEntry = <T extends string>(
  name: T,
  index: number,
  ext = 'png',
  suffix = '',
) =>
  `${SCREENS_DIR}/${name}/${index + 1}/${
    index + 1
  }${suffix}.${ext}`;

export const resolveWebp = async (
  entry: string,
  path: string,
) => {
  const webpEntry = `${path}.webp`;
  const webp: OutputInfo = await sharp(entry)
    .webp({ lossless: true })
    .toFile(webpEntry);
  writeFileData(`${path}-output-webp.md`, webp);

  return webpEntry;
};

export const resolveMetaDataFile = async (
  entry: string,
  path: string,
  extra = {},
): Promise<Metadata> => {
  const result: Metadata = await sharp(entry).metadata();
  writeFileData(path, { ...result, ...extra });
  return result;
};

export const writePrecachePath = (entries: string[]) => {
  const originals = entries.map((entry) =>
    removePublicDir(entry),
  );
  const smalls = originals.map((entry) =>
    resolveSmallEntry(entry, 'png'),
  );
  writeFileData(PRECACHE_PATH, [...smalls, ...originals]);
};
