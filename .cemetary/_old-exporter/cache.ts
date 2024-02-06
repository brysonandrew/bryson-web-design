import type { TPathRecord } from "../../ops/config/types/entries";
import { CACHE_EXPORTER_NAME } from "../../ops/utils";
import { cacheDir } from "../../ops/utils/dirs/main";

export const cache = (targets: TPathRecord) => {
  if (!targets) return null;
  for (const dirPath of Object.values(targets)) {
    const { parent, name } = dirPath;
    // cacheDir(parent, CACHE_EXPORTER_NAME, name);
  }
};
