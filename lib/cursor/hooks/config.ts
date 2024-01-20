import { TCursorKey } from '@brysonandrew/cursor/switch/config';
import { NOOP } from '@brysonandrew/base/constants/functions';
import { HOVER_KEY_DELIMITER } from '../context/constants';

export const GLOBAL_KEY = 'GLOBAL_KEY';

export const EMPTY_HANDLERS = {
  onHoverStart: NOOP,
  onHoverEnd: NOOP,
  onPointerLeave: NOOP,
  onMouseLeave: NOOP,
};

export type THoverKeyDelimiter = typeof HOVER_KEY_DELIMITER;

export type THoverKey =
  | `${TCursorKey}${THoverKeyDelimiter}${string}${THoverKeyDelimiter}${string}`
  | null;
