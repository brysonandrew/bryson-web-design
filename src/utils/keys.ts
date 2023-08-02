export const COMPOSITE_KEY_DELIMITER = '-';
export const resolveCompositeKey = (...args: (string | number | undefined | null)[]) =>
  args.filter(Boolean).join(COMPOSITE_KEY_DELIMITER);

export const TITLE_KEY_DELIMITER = ' / ';
export const resolveCompositeTitle = (...args: (string | number | undefined | null)[]) =>
  args.filter(Boolean).join(TITLE_KEY_DELIMITER);
