import {
  resolveCompositeHover,
  useCursor,
} from '@brysonandrew/motion-cursor';
import { useCursorAnimate } from './useCursorAnimate';
import {
  GLOBAL_KEY,
  TCursorKey,
} from '@brysonandrew/motion-cursor/config/constants';
import { TChildren } from '@brysonandrew/config-types';

export const useHover = (
  cursorKey: TCursorKey,
  key1 = GLOBAL_KEY,
  iconKey = '',
  children: TChildren = null,
) => {
  const animate = useCursorAnimate();
  const { hoverKey, onHover } = useCursor();
  const key = resolveCompositeHover(
    cursorKey,
    key1,
    iconKey,
  );
  const update = (isOn: boolean) => {
    const next = isOn ? key : null;
    animate({ nextHover: next });
    onHover({ hoverKey: next, children });
  };
  const onInteractStart = () => {
    update(true);
  };
  const onInteractEnd = () => {
    update(false);
  };
  const isHover = key === hoverKey;
  
  const handlers = {
    onMouseEnter: onInteractStart,
    onPointerEnter: onInteractStart,
    onMouseLeave: onInteractEnd,
    onPointerLeave: onInteractEnd,
  };

  return {
    isHover,
    handlers,
  };
};
