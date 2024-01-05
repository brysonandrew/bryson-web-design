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
} from './config';
import { TMediaRecords } from './types/media';
import { resolveMediaRecord } from './utils/resolveMediaRecord';
import {
  resolveSmallEntry,
  resolveMetaDataFile,
  resolveWebp,
  writePrecachePath,
  writeFileData,
  writeProjectRecordInGallery,
  resolveFsInfo,
} from './utils/write';
import { TScreensRecord } from './types';

(async () => {
  try {
    let projectRecord: TScreensRecord = {};
    const smallRecords: TMediaRecords = [];
    const entriesCountRecord: Record<string, number> = {};

    const entries = await fg([IMAGES_GLOB]);

    writePrecachePath(entries);

    for await (const entry of entries) {
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
        fs.mkdirSync(nextEntryDir);
        fs.rename(entry, nextEntry, console.log);
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

      projectRecord = writeProjectRecordInGallery(
        record,
        name,
        projectRecord,
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
