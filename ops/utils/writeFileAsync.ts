import { green } from '@ops/console';
import { promises as fs } from 'fs';

export const writeFileAsync = async <T extends object | string>(
  path: string,
  data: T,
) => {
  console.log(green(`writing to ${path}`));
  if (typeof data === 'string') {
    await fs.writeFile(path, data);
  } else {
    await fs.writeFile(path, JSON.stringify(data, null, 2));
  }
  console.log(green(`wrote to ${path}`));
  return true;
};
