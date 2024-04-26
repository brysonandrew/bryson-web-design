import { DEP_PREFIX_RX } from '@ops/exporter/config/constants';
import { readFile } from 'node:fs/promises';

export type TFilePartsConfig = {
  filePath: string;
  prefix?: RegExp;
};
export const fileParts = async ({
  filePath,
  prefix = DEP_PREFIX_RX,
}: TFilePartsConfig) => {
  const file = await readFile(filePath, {
    encoding: 'utf-8',
  });
  let parts = file.split(prefix);
  if (!parts) {
    return null;
  } else {
    parts = parts?.slice(1);
    // parts = parts.filter(Boolean);
    // parts = parts.map((value) => value.replace(/\s/g, ''));
    // parts = parts.filter(Boolean);

    return { parts, file };
  }
};
