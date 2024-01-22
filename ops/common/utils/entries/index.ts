import fs from "fs";
import fsx from "fs-extra";
import path from "path";
import type { TPath } from "../../types/entries";

export const copyEntry = (src: string, target: string) => fsx.copySync(src, target);

export const makeEntry = (path: string) => {
  fs.mkdirSync(path, {
    recursive: true,
  });
};

export const findEntryPaths = (parentPath: string, exclude: string[] = []): TPath[] => {
  const entries: TPath[] = [];

  const entryNames = fs.readdirSync(parentPath);
  entryNames.forEach((fsEntry: string) => {
    if (!exclude.includes(fsEntry)) {
      entries.push({
        full: path.join(parentPath, fsEntry),
        parent: parentPath,
        name: fsEntry,
      });
    }
  });
  return entries;
};

type TOpTailConfig = { fromDir: string; filePath: string };
export const removeTail = ({ fromDir, filePath }: TOpTailConfig) =>
  filePath.replace(new RegExp(`(?<=(\/${fromDir})).+`), "");
export const extractTail = ({ fromDir, filePath }: TOpTailConfig) =>
  filePath.replace(new RegExp(`.+(?=${fromDir}\/)`), "");

export const formatEntry = (entry: string) =>
  entry.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
