import { readFileSync } from "fs";
import { readdir } from "fs/promises";
import path from "path";
import glob from "fast-glob";
import type { TPath, TPathRecord } from "../../types/entries";
import { resolveDir } from "../dirs/main";
import { DEFAULT_IGNORE } from "../exporter/config";
import { findEntryPaths } from "../entries";

export const resolveExtension = (entryPath: string) => path.extname(entryPath);

export const findFilePaths = (parentPath: string, ext: string): TPathRecord => {
  const filePaths = {} as TPathRecord;
  findEntryPaths(parentPath).forEach((fsEntry: TPath) => {
    if (resolveExtension(fsEntry.full) === ext) {
      filePaths[fsEntry.name] = fsEntry;
    }
  });
  return filePaths;
};

export const readFile = (filePath: string): string => readFileSync(filePath, { encoding: "utf-8" });

export const resolveNotIndexFiles = (cwd: string, extGlob: string): string[] => {
  const pattern = `${cwd}/**/*[!index]*${extGlob}`;
  return glob.sync(pattern, { cwd, ignore: DEFAULT_IGNORE });
};

export const resolveFiles = (cwd: string, extGlob: string): string[] => {
  if (resolveDir(cwd)) {
    const pattern = `./**/*${extGlob}`;
    return glob.sync(pattern, { cwd, ignore: DEFAULT_IGNORE });
  } else {
    return [];
  }
};
export const resolveFull = (file: string) => path.join(process.env.PROJECT_CWD || "", file);

export async function* getFiles(dir: string): AsyncGenerator {
  const entries = await readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const res = path.resolve(dir, entry.name);
    if (entry.isDirectory()) {
      yield* getFiles(res);
    } else {
      yield res;
    }
  }
}
