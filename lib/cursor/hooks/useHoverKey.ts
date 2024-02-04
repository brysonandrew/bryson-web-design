import {
  resolveCompositeHoverKey,
  useCursor,
} from '@brysonandrew/cursor';
import { useCursorAnimate } from './useCursorAnimate';
import {
  GLOBAL_KEY,
  TCursorKey,
} from '@brysonandrew/cursor/config/constants';
import { TChildren } from '@brysonandrew/config-types';

export const useHoverKey = (
  cursorKey: TCursorKey,
  key1 = GLOBAL_KEY,
  iconKey = '',
  children: TChildren = null,
) => {
  const animate = useCursorAnimate();
  const { hoverKey, onHoverKey } = useCursor();
  const key = resolveCompositeHoverKey(
    cursorKey,
    key1,
    iconKey,
  );
  const update = (isOn: boolean) => {
    const next = isOn ? key : null;
    animate({ nextHoverKey: next });
    onHoverKey({ hoverKey: next, children });
  };
  const onInteractStart = () => {
    update(true);
  };
  const onInteractEnd = () => {
    update(false);
  };
  const isHover = key === hoverKey;

  const handlers = {
    onHoverStart: onInteractStart,
    onHoverEnd: onInteractEnd,
    onPointerLeave: onInteractEnd,
    onMouseLeave: onInteractEnd,
  };

  return {
    isHover,
    handlers,
  };
};
