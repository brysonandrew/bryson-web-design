import { templateArrayConst } from '@ops/templates';
import { TBunnyFontResult } from '@ops/fonts/bunny/types';
import { writeFile } from 'fs';
import { join, parse } from 'path';
import { writeCallback } from '@ops/console/write';
const BUNNY_FONTS_URL = 'https://fonts.bunny.net/list';
const { name } = parse(__dirname);
const TARGET_DIR = join(
  'lib/uno/presets/config/constants/',
  name,
);
const OUTPUT_DIR = join('ops/fonts/', name, 'output.json');

export const createBunnyFontFiles = async () => {
  try {
    const response = await fetch(BUNNY_FONTS_URL);
    const fontRecord: TBunnyFontResult =
      await response.json();
    const fontItems = Object.values(fontRecord);

    writeFile(
      OUTPUT_DIR,
      JSON.stringify(fontItems, null, 2),
      writeCallback(`${name} output`, OUTPUT_DIR),
    );
    const names = new Set<string>();
    const categories = new Set<string>();
    const fonts = [];
    for (const fontItem of fontItems) {
      names.add(fontItem.familyName);
      categories.add(fontItem.category);
      fonts.push({
        key: fontItem.category,
        name: fontItem.familyName,
        weights: fontItem.weights,
      });
    }
    const collection = {
      names,
      categories,
      fonts,
    } as const;
    const keys = ['names', 'categories', 'fonts'] as const;
    keys.forEach((key) => {
      const file = templateArrayConst({
        name: `bunny ${key}`,
        items: [...collection[key]],
      });
      const path = join(TARGET_DIR, `${key}.ts`);
      writeFile(
        path,
        file,
        writeCallback(`${name} ${key} font`, path),
      );
    });
  } catch (error) {
    console.error(error);
  }
};
