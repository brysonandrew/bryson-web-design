import { TCursorKey } from '@components/select/config';
import { useContext } from '@state/Context';
import { TMotionDivProps } from '@t/react';
import {
  resolveCompositeHoverKey,
  HOVER_KEY_DELIMITER,
} from '@utils/keys';
import { isDesktop } from 'react-device-detect';

export type THoverKeyDelimiter = typeof HOVER_KEY_DELIMITER;

export type THoverKey =
  | `${TCursorKey}${THoverKeyDelimiter}${string}`
  | null;

type TReturn = Pick<
  TMotionDivProps,
  | 'onHoverStart'
  | 'onHoverEnd'
  | 'onPointerLeave'
  | 'onMouseLeave'
> & {
  isHover: boolean;
};
export const useHoverKey = (
  cursorKey: TCursorKey,
  secondaryKey = 'global',
): TReturn => {
  const { hoverKey, dispatch } = useContext();
  if (!isDesktop) return { isHover: false };
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

  const isHover = key === hoverKey;

  return {
    isHover,
    onHoverStart,
    onHoverEnd,
    onPointerLeave: onHoverEnd,
    onMouseLeave: onHoverEnd,
  };
};
