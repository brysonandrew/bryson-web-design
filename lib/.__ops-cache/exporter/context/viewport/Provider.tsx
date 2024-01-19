import type { FC, PropsWithChildren } from 'react';
import { VIEWPORT } from './constants';
import { useMeasure, TViewport } from './useMeasure';

export const Provider: FC<PropsWithChildren> = ({
  children,
}) => {
  const viewport = useMeasure();

  const isVertical = ({
    width = 0,
    height = 0,
  }: TViewport) => {
    return (width ?? 0) < (height ?? 0) && width < 700;
  };

  return (
    <VIEWPORT.Provider
      value={{
        ...viewport,
        halfWidth: (viewport.width ?? 0) * 0.5,
        halfHeight: (viewport.height ?? 0) * 0.5,
        isVertical: isVertical(viewport),
      }}
    >
      {children}
    </VIEWPORT.Provider>
  );
};
