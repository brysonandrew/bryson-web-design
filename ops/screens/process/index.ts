import fs from 'fs';
import fg from 'fast-glob';
import sharp, { OutputInfo } from 'sharp';
import {
  IMAGES_GLOB,
  SMALL_W,
  SMALL_SUFFIX,
  LOOKUP_SMALL_PATH,
  SCREENS_DIR,
  EXCLUDE_SMALLS,
  BASE_SCREENS_ENTRY,
} from './constants';
import { resolveMediaRecord } from '@ops/utils/resolveMediaRecord';
import {
  resolveSmallEntry,
  resolveMetaDataFile,
  resolveWebp,
  writePrecachePath,
  writeFileData,
  resolveFsInfo,
} from '@ops/utils/write';
import {
  TMediaRecords,
  TScreensRecord,
} from '@brysonandrew/media';
import { writeScreensRecordInGallery } from './utils/writeScreensRecordInGallery';

(async () => {
  try {
    let screensRecord: TScreensRecord = {};
    const smallRecords: TMediaRecords = [];
    const entriesCountRecord: Record<string, number> = {};

    const entries = await fg([IMAGES_GLOB]);

    writePrecachePath(entries);

    for await (let entry of entries) {
      const { ext } = resolveFsInfo(entry);
      const [_, tail] = entry.split(BASE_SCREENS_ENTRY);
      const [name] = tail.split('/');

      const currCount = ~~entriesCountRecord[name];
      const nextCount = currCount + 1;

      entriesCountRecord[name] = nextCount;
      const nextEntryDir = [
        SCREENS_DIR,
        name,
        nextCount,
      ].join('/');

      const nextEntryBase = `${nextEntryDir}/${nextCount}`;
      const nextEntry = `${nextEntryBase}.${ext}`;

      if (!fs.existsSync(nextEntryDir)) {
        await fs.promises.mkdir(nextEntryDir);
        await fs.promises.rename(entry, nextEntry);
        entry = nextEntry;
      }

      const originalMetaData = await resolveMetaDataFile(
        entry,
        `${nextEntryBase}-meta.md`,
      );

      const webpEntry = await resolveWebp(
        entry,
        `${nextEntryBase}`,
      );

      const record = resolveMediaRecord({
        entry: nextEntry,
        webpEntry,
        ...originalMetaData,
      });

      screensRecord = writeScreensRecordInGallery(
        record,
        name,
        screensRecord,
      );

      if (EXCLUDE_SMALLS.includes(name)) {
        continue;
      }

      const smallEntry = resolveSmallEntry(
        nextEntryBase,
        ext,
      );
      const small: OutputInfo = await sharp(entry)
        .resize({ width: SMALL_W })
        .toFile(smallEntry);

      const smallMeta = await resolveMetaDataFile(
        smallEntry,
        `${nextEntryBase}-meta-output-${SMALL_SUFFIX}.md`,
        small,
      );

      const webpSmallEntry = await resolveWebp(
        smallEntry,
        `${nextEntryBase}${SMALL_SUFFIX}`,
      );

      const smallRecord = resolveMediaRecord({
        entry: smallEntry,
        webpEntry: webpSmallEntry,
        ...smallMeta,
      });

      if (smallRecord) {
        smallRecords.push(smallRecord);
      }

      writeFileData(LOOKUP_SMALL_PATH, smallRecords);
    }
  } catch (error) {
    console.error(error);
  }
})();
