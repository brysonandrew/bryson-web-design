import { useState } from 'react';

export const useHoverBasic = () => {
  const [isHover, setHover] = useState<boolean>(false);

  const onHoverStart = () => setHover(true);
  const onHoverEnd = () => setHover(false);

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

export type THoverBasicConfig = ReturnType<
  typeof useHoverBasic
>;
export type THoverBasicHandlers = THoverBasicConfig['handlers'];
