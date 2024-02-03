import type { TPathRecord } from "../config/types/entries";
import { CACHE_EXPORTER_NAME } from "../utils";
import { cacheDir } from "../utils/dirs/main";

export const cache = (targets: TPathRecord) => {
  if (!targets) return null;
  for (const dirPath of Object.values(targets)) {
    const { parent, name } = dirPath;
    // cacheDir(parent, CACHE_EXPORTER_NAME, name);
  }
};
