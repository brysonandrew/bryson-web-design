import fs from "fs";
import path from "path";
import { findEntryPaths, makeEntry, copyEntry } from "..";
import type { TPath, TPathRecord } from "../../config/types/entries";
import { CACHE_BASE_NAME } from "../constants";

export const errorHandler = (error: any) => {
  if (error) {
    console.log("Something went wrong " + error);
  } else {
    console.log(`Success`);
  }
};

export const resolveDir = (targetPath: string) =>
  fs.existsSync(targetPath) && fs.lstatSync(targetPath).isDirectory() ? targetPath : null;

export const resolveFile = (targetPath: string) =>
  fs.existsSync(targetPath) && fs.lstatSync(targetPath).isFile() ? targetPath : null;

export const findDirPaths = (parentPath: string, exclude?: string[]): TPathRecord => {
  const dirs = {} as TPathRecord;
  findEntryPaths(parentPath, exclude).forEach((fsEntry: TPath) => {
    if (resolveDir(fsEntry.full)) {
      (dirs)[fsEntry.name] = fsEntry;
    }
  });
  return dirs;
};

export const changeParentPath = ({ full, parent, name }: TPath, parentName: string) => {
  const nextPath = path.join(parent, parentName, name);
  fs.renameSync(full, nextPath);
  return nextPath;
};

export const cacheDirOps = (dir: string, opsName?: string) => {
  const cachePath = path.join(
    process.env.PROJECT_CWD || "",
    "ops",
    CACHE_BASE_NAME,
    opsName || "",
    path.basename(dir)
  );
  makeEntry(cachePath);
  copyEntry(dir, cachePath);
};

export const cacheDir = (parent: string, cacheName: string, dirName: string) => {
  const cachePath = path.join(parent, cacheName, dirName);
  makeEntry(cachePath);
  copyEntry(path.join(parent, dirName), cachePath);
};
