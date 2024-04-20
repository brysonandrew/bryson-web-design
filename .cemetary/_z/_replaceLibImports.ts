import { INTERNAL_PREFIX } from '../../ops/exporter/config/constants';
import { KEYS } from './_replaceImports';

export const x = (file: string) => {
  KEYS.forEach(async (key) => {
    const rx = new RegExp(`${INTERNAL_PREFIX}color/${key}`, 'g');
    if (rx.test(file)) {
      // const n = `${INTERNAL_PREFIX}${name}/${key}`;
      // file = file.replace(rx, n);
      // await writeFile(filePath, file);
    }
  });
};
