import { HOVER_KEY_DELIMITER } from '../context/constants';
import { THoverKey } from '../hooks';
import { TCursorKey } from '../switch/config';

export const resolveCompositeHoverKey = (
  cursorKey: TCursorKey,
  key1: string,
  iconKey = '',
): THoverKey =>
  `${cursorKey}${HOVER_KEY_DELIMITER}${key1}${HOVER_KEY_DELIMITER}${iconKey}`;
