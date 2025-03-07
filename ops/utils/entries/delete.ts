import { existsSync } from "fs";
import { rm } from "fs/promises";

import path from "path";

import { faint, green, red } from "@ops/console";

export const deleteEntry = async (cwd: string, entryPath: string) => {
  const fullPath = path.join(cwd, entryPath);
  try {
    if (!existsSync(fullPath)) {
      console.log(faint(`%s entry ${entryPath} doesn't exist`), fullPath);
    } else {
      await rm(fullPath, { recursive: true });
      console.log(green(`succeeded to delete ${entryPath} `));
    }
  } catch (error) {
    console.log(red(`failed to delete ${entryPath}`));
  }
};

export const deleteEntries = async (cwd: string, entryPaths: string[], allDone: () => void) => {
  for await (const entryPath of entryPaths) {
    await deleteEntry(cwd, entryPath);
  }
  allDone();
};
