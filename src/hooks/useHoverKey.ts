import { TCursorKey } from '@components/select/config';
import { NOOP } from '@constants/functions';
import { useContext } from '@state/Context';
import {
  resolveCompositeHoverKey,
  HOVER_KEY_DELIMITER,
} from '@utils/keys';
import { isDesktop } from 'react-device-detect';

export const GLOBAL_KEY = 'GLOBAL_KEY';

const EMPTY_HANDLERS = {
  onHoverStart: NOOP,
  onHoverEnd: NOOP,
  onPointerLeave: NOOP,
  onMouseLeave: NOOP,
};

export type THoverKeyDelimiter = typeof HOVER_KEY_DELIMITER;

export type THoverKey =
  | `${TCursorKey}${THoverKeyDelimiter}${string}${THoverKeyDelimiter}${string}`
  | null;
export const useHoverKey = (
  cursorKey: TCursorKey,
  key1 = GLOBAL_KEY,
  key2 = GLOBAL_KEY,
) => {
  const { hoverKey, dispatch } = useContext();
  if (!isDesktop)
    return { isHover: false, handlers: EMPTY_HANDLERS };
  const key = resolveCompositeHoverKey(
    cursorKey,
    key1,
    key2,
  );
  const update = (isOn: boolean) => {
    dispatch({
      value: isOn ? key : null,
      type: 'hover-key',
    });
  };
  const onHoverStart = () => update(true);
  const onHoverEnd = () => {
    update(false);
  };

  const isHover = key === hoverKey;

  const handlers = {
    onHoverStart,
    onHoverEnd,
    onPointerLeave: onHoverEnd,
    onMouseLeave: onHoverEnd,
  };

  return {
    isHover,
    handlers,
  };
};
