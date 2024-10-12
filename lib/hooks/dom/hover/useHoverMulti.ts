import { useState } from 'react';

export type THoverMulti = string | number;
export const useHoverMulti = () => {
  const [hovers, setHoverMultis] =
    useState<THoverMulti[]>([]);

  const onHoverStart = (
    key: THoverMulti,
  ) =>
    setHoverMultis((prevKeys) => [
      ...prevKeys,
      key,
    ]);
  const onHoverEnd = (key: THoverMulti) =>
    setHoverMultis((prevKeys) =>
      prevKeys.filter((v) => v !== key),
    );

  const handlers = (
    key: THoverMulti,
  ) => ({
    onHoverStart: () =>
      onHoverStart(key),
    onHoverEnd: () => onHoverEnd(key),
    onPointerLeave: () =>
      onHoverEnd(key),
    onMouseLeave: () => onHoverEnd(key),
  });

  return {
    hovers,
    isNoHover: hovers.length === 0,
    isHover: (key: THoverMulti) =>
      hovers.includes(key),
    handlers,
  };
};
export type THoverMultiConfig =
  ReturnType<typeof useHoverMulti>;
export type THoverMultiHandlers =
  THoverMultiConfig['handlers'];
