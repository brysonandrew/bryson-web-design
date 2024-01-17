import type { FC, PropsWithChildren } from 'react';
import { VIEWPORT } from './constants';
import {
  TViewport,
  useViewport,
} from '@lib/hooks/window/useViewport';

export const Provider: FC<PropsWithChildren> = ({
  children,
}) => {
  const viewport = useViewport();

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
