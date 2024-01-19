import type { TPathRecord } from "../common/types/entries";
import { CACHE_EXPORTER_NAME } from "../common/utils";
import { cacheDir } from "../common/utils/dirs/main";

export const cache = (targets: TPathRecord) => {
  if (!targets) return null;
  for (const dirPath of Object.values(targets)) {
    const { parent, name } = dirPath;
    cacheDir(parent, CACHE_EXPORTER_NAME, name);
  }
};
