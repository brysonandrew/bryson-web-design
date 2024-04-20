import {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
} from 'react';
import {
  useMeasure,
  TViewport,
  INIT_VIEWPORT,
} from './use-measure';
import { TContext } from '@brysonandrew/viewport/config/types';

const INIT: TContext = {
  ...INIT_VIEWPORT,
  isVertical: false,
  halfHeight: 0,
  halfWidth: 0,
};

export const VIEWPORT = createContext<TContext>(INIT);

export const useViewport = (): TContext =>
  useContext<TContext>(VIEWPORT);

export const ViewportProvider: FC<PropsWithChildren> = ({
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
