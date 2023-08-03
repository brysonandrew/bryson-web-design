import { TCursorKey } from '@components/select/config';
import { useContext } from '@state/Context';
import {
  resolveCompositeHoverKey,
  HOVER_KEY_DELIMITER,
} from '@utils/keys';
import { isDesktop } from 'react-device-detect';

export type THoverKeyDelimiter = typeof HOVER_KEY_DELIMITER;

export type THoverKey =
  | `${TCursorKey}${THoverKeyDelimiter}${string}`
  | null;

export const useHoverKey = (
  cursorKey: TCursorKey,
  secondaryKey = 'global',
) => {
  const { hoverKey, dispatch } = useContext();
  if (!isDesktop) return {};
  const key = resolveCompositeHoverKey(
    cursorKey,
    secondaryKey,
  );
  const update = (isOn: boolean) =>
    dispatch({
      value: isOn ? key : null,
      type: 'hover-key',
    });
  const onHoverStart = () => update(true);
  const onHoverEnd = () => update(false);

  return {
    isHover: key === hoverKey,
    onHoverStart,
    onHoverEnd,
    onPointerLeave: onHoverEnd,
    onMouseLeave: onHoverEnd,
  };
};
