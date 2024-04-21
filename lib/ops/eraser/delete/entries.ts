import { deleteEntry } from '@brysonandrew/ops';

export const deleteEntries = async (
  entryPaths: string[],
  allDone: () => void
) => {
  for await (const entryPath of entryPaths) {
    await deleteEntry(entryPath);
  }
  allDone();
};
