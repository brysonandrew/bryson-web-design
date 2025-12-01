import fs from 'fs/promises';
import path from 'path';
import fglob from 'fast-glob';
import sharp, { OutputInfo } from 'sharp';
import {
  SMALL_W,
  SMALL_SUFFIX,
  LOOKUP_SMALL_PATH,
  SCREENS_DIR,
  EXCLUDE_SMALLS,
  BASE_SCREENS_ENTRY,
} from '../config/constants';
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
import { writeScreensRecordInGallery } from '@ops/screens/process/utils/writeScreensRecordInGallery';
import { green } from '@ops/console';

(async () => {
  try {
    // check for entries that do not have a numbered folder assigned (loose entries)
    const entries = await fglob([
      'assets/screens/*/*.(jpg|png)', // first * is project name, second * is image file name
    ]);
    let index = 1;
    for await (const entry of entries) {
      const data = await fs.readFile(entry);

      const dir = path.dirname(entry);
      const ext = path.extname(entry);

      let nextPath = path.join(dir, `${index}`);

      await fs.mkdir(nextPath);

      nextPath = path.join(nextPath, `${index}${ext}`);

      await fs.writeFile(nextPath, data);

      console.log(
        green(`wrote missing dir to  ${nextPath}.`),
      );

      index++;
    }
    if (entries.length === 0) {
      console.log(green('No loose entries found.\n'));
    }
  } catch (error) {
    console.error('Error processing loose entries', error);
  }
  try {
    const entries = await fglob([
      'assets/screens/*/[1-9]/[1-9].webp',
    ]);
    for await (const entry of entries) {
      try {
        const dirPath = path.dirname(entry);
        const basename = path.basename(entry);
        const ext = path.extname(entry);
        const name = basename.replace(ext, '');

        const dirEntries = await fs.readdir(dirPath);
        const pngName = `${name}.png`;
        const outputPath = `${dirPath}/${pngName}`;
        if (dirEntries.some((value) => value === pngName)) {
          console.log(green('already contains png'), entry);
        } else {
          console.log('no png', entry);
          try {
            const result = await sharp(entry)
              .png()
              .toFile(outputPath);
            console.log(
              green('Converted webp to png:'),
              outputPath,
              result,
            );
          } catch (error) {
            console.error('Error converting to png', error);
          }
        }
        if (entries.length === 0) {
          console.log(
            green('No missing png entries found.\n'),
          );
        }
      } catch (error) {
        console.error('Error reading dir', error);
      }
    }
  } catch (error) {
    console.error(
      'Error processing missing fallback entries',
      error,
    );
  }
  try {
    let screensRecord: TScreensRecord = {};
    const smallRecords: TMediaRecords = [];
    const entriesCountRecord: Record<string, number> = {};
    const entries = await fglob([
      'assets/screens/*/[1-9]/[1-9].png',
    ]);

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

      // if (!existsSync(nextEntryDir)) {
      //   await mkdir(nextEntryDir);
      //   await rename(entry, nextEntry);
      //   entry = nextEntry;
      // }

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
