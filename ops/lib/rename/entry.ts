import { existsSync } from 'fs';
import {
  writeFile,
  rm,
  readFile,
  mkdir,
} from 'fs/promises';
import { renameModifier } from './modifier';
import { faint, green, red } from './display';

export const renameEntry = async (entryPath: string) => {
  try {
    if (!existsSync(entryPath)) {
      console.log(
        faint(`%s entry ${entryPath} doesn't exist`),
      );
    } else {
      const lowerCaseEntryPath = entryPath.toLowerCase();
      if (lowerCaseEntryPath !== entryPath) {
        const parts = entryPath.split('/');
        let nextPath = '';
        const count = parts.length;
        let i = 0;
        for await (const part of parts) {
          const nextPart = renameModifier(part);
          nextPath = nextPath
            ? `${nextPath}/${nextPart}`
            : nextPart;
          const isLast = i === count - 1;
          console.log(nextPath, `is last: ${isLast}`);

          if (!existsSync(nextPath) && !isLast) {
            await mkdir(nextPath);
          }

          i++;
        }
        const file = await readFile(entryPath, {
          encoding: 'utf-8',
        });
        console.log(nextPath);
        await writeFile(nextPath, file);

        console.log(green(`added new path ${nextPath}.`));

        await rm(entryPath, { recursive: true });
        console.log(red(`removed old path ${entryPath} `));
        console.log(
          green(
            `succeeded to rename ${entryPath} -> ${nextPath}`,
          ),
        );
      }
    }
  } catch (error) {
    console.log(error);
    console.log(red(`failed to rename ${entryPath}`));
  }
};
