import { deleteEntry } from '@ops/delete/entry';

export const deleteEntries = async (
  entryPaths: string[],
  allDone: () => void
) => {
  for await (const entryPath of entryPaths) {
    await deleteEntry(entryPath);
  }
  allDone();
};
