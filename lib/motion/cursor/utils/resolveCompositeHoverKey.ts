import { HOVER_KEY_DELIMITER, TCursorKey, THoverKey } from '../config/constants';

export const resolveCompositeHoverKey = (
  cursorKey: TCursorKey,
  key1: string,
  iconKey = '',
): THoverKey =>
  `${cursorKey}${HOVER_KEY_DELIMITER}${key1}${HOVER_KEY_DELIMITER}${iconKey}`;
