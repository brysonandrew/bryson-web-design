import {
  PropsWithChildren,
  useState,
  createContext,
  useContext,
} from 'react';
import type { FC } from 'react';
import { TScreensRecord } from '@brysonandrew/media';
import { TViewerContext } from '@brysonandrew/gallery/viewer/config/types';

export const VIEWER = createContext<TViewerContext>(
  {} as TViewerContext,
);

export const useViewer = (): TViewerContext =>
  useContext<TViewerContext>(VIEWER);

export const ViewerProvider: FC<
  PropsWithChildren<{ screensRecordJson: TScreensRecord }>
> = ({ screensRecordJson, children }) => {
  const screensRecord =
    screensRecordJson as unknown as TScreensRecord;
  const [isTransitioningGallery, setTransitioningGallery] =
    useState(false);
  const onDrag = setTransitioningGallery;
  const onMotionBlurStart = () =>
    setTransitioningGallery(true);
  const onMotionBlurEnd = () =>
    setTransitioningGallery(false);

  return (
    <VIEWER.Provider
      value={{
        screensRecord,
        isTransitioningGallery,
        onDrag,
        onMotionBlurStart,
        onMotionBlurEnd,
      }}
    >
      {children}
    </VIEWER.Provider>
  );
};
