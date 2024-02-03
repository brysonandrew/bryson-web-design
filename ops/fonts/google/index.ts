import { templateArrayConst } from '@ops/templates';
import { green, red } from '@ops/console';
import { TGoogleFontResult } from '@ops/fonts/google/types';
import { writeFile } from 'fs';
import { join, parse } from 'path';
import { writeCallback } from '@ops/console/write';
const GOOGLE_FONTS_URL =
  'https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyBwIX97bVWr3-6AIUvGkcNnmFgirefZ6Sw';
const { name } = parse(__dirname);
const TARGET_DIR = join(
  'lib/uno/presets/config/constants/',
  name,
);
const OUTPUT_DIR = join('ops/fonts/', name, 'output.json');

export const createGoogleFontFiles = async () => {
  try {
    const response = await fetch(GOOGLE_FONTS_URL);
    const fontRecord: TGoogleFontResult =
      await response.json();
    const fontItems = fontRecord.items;
    writeFile(
      OUTPUT_DIR,
      JSON.stringify(fontRecord, null, 2),
      writeCallback(`${name} output`, OUTPUT_DIR),
    );
    const names = new Set<string>();
    const categories = new Set<string>();
    const fonts = [];
    for (const fontItem of fontItems) {
      names.add(fontItem.family);
      categories.add(fontItem.category);
      fonts.push({
        key: fontItem.category,
        name: fontItem.family,
        weights: fontItem.variants,
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
        name: `google ${key}`,
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
