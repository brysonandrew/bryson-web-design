import { useContext } from '@state/Context';
import { useEffect } from 'react';
import { isMobile } from 'react-device-detect';

export const useSelectHandlers = (name: string) => {
  const { selectId, dispatch } = useContext();
  const isDisabled = isMobile;

  const handleSelectEnd = () =>
    dispatch({ type: 'select-id', value: null });
  const handlers = isDisabled
    ? {}
    : {
        onHoverStart: () =>
          dispatch({ type: 'select-id', value: name }),
        onHoverEnd: handleSelectEnd,
      };

  useEffect(() => handleSelectEnd, []);

  return {
    isSelected: !isDisabled && selectId === name,
    handlers,
  };
};
