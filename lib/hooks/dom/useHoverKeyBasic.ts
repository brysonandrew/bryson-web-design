import { useState } from 'react';

export type THoverKey = string | number;
export const useHoverKeyBasic = () => {
  const [isHover, setHoverKey] = useState<boolean>(false);

  const onHoverStart = () => setHoverKey(true);
  const onHoverEnd = () => setHoverKey(false);

  const handlers ={
    onHoverStart: () => onHoverStart(),
    onHoverEnd: () => onHoverEnd(),
    onPointerLeave: () => onHoverEnd(),
    onMouseLeave: () => onHoverEnd(),
  };

  return {
    isHover,
    handlers,
  };
};

export type THoverKeyConfig = ReturnType<
  typeof useHoverKeyBasic
>;
export type THoverKeyHandlers = THoverKeyConfig['handlers'];
