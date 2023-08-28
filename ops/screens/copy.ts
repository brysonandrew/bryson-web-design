import path from 'path';
import { promises as fs } from 'fs';
import { ASSETS_SCREENS } from '../config';

const copyDir = async (src, dest) => {
  await fs.mkdir(dest, { recursive: true });
  const entries = await fs.readdir(src, {
    withFileTypes: true,
  });

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    entry.isDirectory()
      ? await copyDir(srcPath, destPath)
      : await fs.copyFile(srcPath, destPath);
  }
};

(async () => {
  try {
    copyDir(
      path.resolve(ASSETS_SCREENS),
      path.resolve(`${ASSETS_SCREENS}-copy`),
    );
  } catch (error) {
    console.error(error);
  }
})();
