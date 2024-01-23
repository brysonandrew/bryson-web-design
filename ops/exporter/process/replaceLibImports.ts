import { APP_PREFIX } from '../config/constants';
import { KEYS } from './replaceImports';

export const x = (file: string) => {
  KEYS.forEach(async (key) => {
    const rx = new RegExp(`${APP_PREFIX}color/${key}`, 'g');
    if (rx.test(file)) {
      // const n = `${APP_PREFIX}${name}/${key}`;
      // file = file.replace(rx, n);
      // await writeFile(filePath, file);
    }
  });
};
