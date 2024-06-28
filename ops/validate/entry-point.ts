import { red } from '@ops/console';
import { prependPwd } from '@ops/utils/dirs/pwd';
import { stat } from 'fs/promises';

// type TDirent = keyof FS.Dirent;
const VALIDATION_TYPES = ['isDirectory', 'isFile'] as const;
type TValidationType = (typeof VALIDATION_TYPES)[number];

export const validateEntryPoint = async (
  validation: TValidationType = 'isDirectory',
  entryPath: string | null = null
) => {
  if (entryPath === null) {
    const args = process.argv;
    entryPath = args[args.length - 1];
  }

  const targetDirPath = prependPwd(entryPath);
  const pathInfo = await stat(targetDirPath);
  if (pathInfo[validation]()) {
    return entryPath;
  } else {
    console.log(
      red('Invalid dir path'),
      targetDirPath,
      pathInfo
    );
    throw new Error('Invalid dir path');
  }
};
