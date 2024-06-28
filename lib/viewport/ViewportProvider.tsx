import {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
} from 'react';
import {
  INIT_VIEWPORT,
  TViewport,
  useViewportMeasure,
} from '@brysonandrew/viewport/use-measure';

const INIT: TViewport = {
  ...INIT_VIEWPORT,
};

export const VIEWPORT = createContext<TViewport>(INIT);

export const useViewport = (): TViewport =>
  useContext<TViewport>(VIEWPORT);

export const ViewportProvider: FC<PropsWithChildren> = ({
  children,
}) => {
  const viewport = useViewportMeasure();

  return (
    <VIEWPORT.Provider value={viewport}>
      {children}
    </VIEWPORT.Provider>
  );
};
