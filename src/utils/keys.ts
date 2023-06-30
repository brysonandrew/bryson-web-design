export const COMPOSITE_KEY_DELIMITER = '-';
export const resolveCompositeKey = (...args: (string | number | undefined | null)[]) =>
  args.filter(Boolean).join(COMPOSITE_KEY_DELIMITER);
