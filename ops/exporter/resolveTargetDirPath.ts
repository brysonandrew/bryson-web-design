import { red } from '@ops/console';
import { prependPwd } from '@ops/utils/dirs/pwd';
import { stat } from 'fs/promises';

export const resolveTargetDirPath = async () => {
  const args = process.argv;
  const targetDir = args[args.length - 1];
  const targetDirPath = prependPwd(targetDir);
  const pathInfo = await stat(targetDirPath);
  if (pathInfo.isDirectory()) {
    return targetDir;
  } else {
    console.log(
      red('Invalid dir path'),
      targetDirPath,
      pathInfo,
    );
    throw new Error('Invalid dir path');
  }
};
