import type { TouchEvent } from 'react';
import { useContext } from '@state/Context';
import { resolveCompositeHoverKey } from '@utils/keys';
import { GLOBAL_KEY } from './config';
import { useCursorAnimate } from './useCursorAnimate';
import { TCursorKey } from '@components/cursor/switch/config';

export const useHoverKey = (
  cursorKey: TCursorKey,
  key1 = GLOBAL_KEY,
  key2 = GLOBAL_KEY,
) => {
  const animate = useCursorAnimate();
  const { hoverKey, dispatch } = useContext();
  // if (!isDesktop)
  //   return { isHover: false, handlers: EMPTY_HANDLERS };
  const key = resolveCompositeHoverKey(
    cursorKey,
    key1,
    key2,
  );
  const update = (isOn: boolean) => {
    const next = isOn ? key : null;
    animate({ nextHoverKey: next });
    dispatch({
      value: next,
      type: 'hover-key',
    });
  };
  const onHoverStart = () => update(true);
  const onHoverEnd = () => {
    update(false);
  };

  const isHover = key === hoverKey;

  const handlers = {
    onTouchStart: (event: TouchEvent<HTMLElement>) =>
      event.preventDefault(),
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
