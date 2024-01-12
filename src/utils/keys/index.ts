import { TCursorKey } from '@components/base/cursor/switch/config';
import { THoverKey } from '@components/base/cursor/hooks/config';

export const COMPOSITE_KEY_DELIMITER = '-';
export const resolveCompositeKey = (
  ...args: (string | number | undefined | null)[]
) => args.filter(Boolean).join(COMPOSITE_KEY_DELIMITER);

export const TITLE_KEY_DELIMITER = ' | ';
export const resolveCompositeTitle = (
  ...args: (string | number | undefined | null)[]
) => args.filter(Boolean).join(TITLE_KEY_DELIMITER);

export const HOVER_KEY_DELIMITER = '=[hover]>';
export const resolveCompositeHoverKey = (
  cursorKey: TCursorKey,
  key1: string,
  key2: string,
): THoverKey =>
  `${cursorKey}${HOVER_KEY_DELIMITER}${key1}${HOVER_KEY_DELIMITER}${key2}`;
