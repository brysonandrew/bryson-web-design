export const sortByKeys = <T extends object>(
  record: T,
): T =>
  Object.entries(record)
    .sort(([keyA], [keyB]) => {
      if (keyA < keyB) {
        return -1;
      }
      if (keyA > keyB) {
        return 1;
      }
      return 0;
    })
    .reduce(
      (a, [key, value]) => ({ ...a, [key]: value }),
      {} as T,
    );
