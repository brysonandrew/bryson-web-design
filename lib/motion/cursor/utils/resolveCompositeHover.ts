import {
  TCursorKey,
  HOVER_KEY_DELIMITER,
  THover,
  THoverKey,
} from '@brysonandrew/motion-cursor/base';

export const resolveCompositeHover = (
  cursorKey: TCursorKey,
  key1: string,
  iconKey = ''
): THoverKey =>
  `${cursorKey}${HOVER_KEY_DELIMITER}${key1}${HOVER_KEY_DELIMITER}${iconKey}`;
