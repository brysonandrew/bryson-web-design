export const COMPOSITE_KEY_LOCAL_STORAGE_DELIMITER = ':';
export const resolveKeyLocalStorage = (
  ...args: (string | number | undefined | null)[]
) => args.filter(Boolean).join(COMPOSITE_KEY_LOCAL_STORAGE_DELIMITER);

export * from './generateRandomId';