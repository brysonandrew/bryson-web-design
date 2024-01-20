export const TITLE_KEY_DELIMITER = ' | ';
export const resolveCompositeTitle = (
  ...args: (string | number | undefined | null)[]
) => args.filter(Boolean).join(TITLE_KEY_DELIMITER);

export const defaultTitlesResolver = (titles: string[]) =>
titles.join(TITLE_KEY_DELIMITER)

export type TTitlesResolver = (titles: string[]) => string