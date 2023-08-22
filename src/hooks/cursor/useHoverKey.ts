import { useContext } from '@context/cursor/Context';
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
