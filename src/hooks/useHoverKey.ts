import { TCursorKey } from '@components/select/config';
import { useContext } from '@state/Context';
import { isDesktop } from 'react-device-detect';

export const useHoverKey = (key: TCursorKey) => {
  const { cursorKey, dispatch } = useContext();
  if (!isDesktop) return {};
  const update = (isOn: boolean) =>
    dispatch({
      value: isOn ? key : null,
      type: 'cursor-key',
    });
  const onHoverStart = () => update(true);
  const onHoverEnd = () => update(false);

  return {
    isHover: key === cursorKey,
    onHoverStart,
    onHoverEnd,
    onPointerLeave: onHoverEnd,
    onMouseLeave: onHoverEnd,
  };
};
