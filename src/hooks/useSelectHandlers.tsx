import { useContext } from '@state/Context';
import { useEffect } from 'react';

export const useSelectHandlers = (name: string) => {
  const { selectId, dispatch } = useContext();

  const handleSelectEnd = () =>
    dispatch({ type: 'select-id', value: null });
  const handlers = {
    onHoverStart: () =>
      dispatch({ type: 'select-id', value: name }),
    onHoverEnd: handleSelectEnd,
  };

  useEffect(() => handleSelectEnd, []);

  return { isSelected: selectId === name, handlers };
};
