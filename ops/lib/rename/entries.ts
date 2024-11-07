import { renameEntry } from './entry';

export const renameEntries = async (
  entryPaths: string[],
  allDone: () => void,
) => {
  for await (const entryPath of entryPaths) {
    await renameEntry(entryPath);
  }
  allDone();
};
