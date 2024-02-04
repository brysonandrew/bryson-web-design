import { templateArrayConst } from '@ops/templates';
import { TFontshareFontResult } from '@ops/fonts/fontshare/types';
import { writeFile } from 'fs';
import { join, parse } from 'path';
import { writeCallback } from '@ops/console/write';
const FONTSHARE_CATEGORIES_URL =
  'https://api.fontshare.com/v2/fonts/categories';
const FONTSHARE_URL =
  'https://api.fontshare.com/v2/fonts?offset=0&limit=20&order_by=popularity';
const { name } = parse(__dirname);
const TARGET_DIR = join(
  'lib/uno/presets/config/constants/',
  name,
);
const OUTPUT_DIR = join('ops/fonts/', name, 'output.json');

export const createFontshareFiles = async () => {
  try {
    //const response = await fetch(FONTSHARE_CATEGORIES_URL);
    const response = await fetch(FONTSHARE_URL);
    const fontRecord: TFontshareFontResult =
      await response.json();
    
    const fontItems = fontRecord.fonts;

    writeFile(
      OUTPUT_DIR,
      JSON.stringify(fontItems, null, 2),
      writeCallback(`${name} output`, OUTPUT_DIR),
    );
    return;
    const names = new Set<string>();
    const categories = new Set<string>();
    const fonts = [];
    // for (const fontItem of fontItems) {
    //   names.add(fontItem.familyName);
    //   categories.add(fontItem.category);
    //   fonts.push({
    //     key: fontItem.category,
    //     name: fontItem.familyName,
    //     weights: fontItem.weights,
    //   });
    // }
    // const collection = {
    //   names,
    //   categories,
    //   fonts,
    // } as const;
    // const keys = ['names', 'categories', 'fonts'] as const;
    // keys.forEach((key) => {
    //   const file = templateArrayConst({
    //     name: `fontshare ${key}`,
    //     items: [...collection[key]],
    //   });
    //   const path = join(TARGET_DIR, `${key}.ts`);
    //   writeFile(
    //     path,
    //     file,
    //     writeCallback(`${name} ${key} font`, path),
    //   );
    // });
  } catch (error) {
    console.error(error);
  }
};
