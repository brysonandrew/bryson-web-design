import path from "path";
import { CACHE_EXPORTER_NAME } from "./constants";
import { resolveDir, findDirPaths } from "../dirs/main";
import type { TPathRecord } from "../../types/entries";

export const findCachedDirPaths = (main: string): TPathRecord => {
  const cachePath = resolveDir(path.join(main, CACHE_EXPORTER_NAME));
  if (cachePath) {
    const dirPaths = findDirPaths(cachePath);
    const next = {} as TPathRecord;
    for (const [name, dirPath] of Object.entries(dirPaths)) {
      next[name] = {
        ...dirPath,
        full: dirPath.full.replace(CACHE_EXPORTER_NAME, ""),
        parent: dirPath.parent.replace(CACHE_EXPORTER_NAME, ""),
      };
    }
    return next;
  } else {
    return {};
  }
};
