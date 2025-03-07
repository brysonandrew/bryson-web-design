import {
  PropsWithChildren,
  useState,
  createContext,
  useContext,
  Fragment,
} from 'react';
import type { FC } from 'react';
import { TScreensRecord } from '@brysonandrew/media';
import { TViewerContext } from '@brysonandrew/gallery-viewer/config/types';
import { useApp } from '@brysonandrew/app';

export const VIEWER = createContext<TViewerContext>(
  {} as TViewerContext,
);

export const useViewer = (): TViewerContext =>
  useContext<TViewerContext>(VIEWER);

export const ViewerProvider: FC<
  PropsWithChildren<{
    screensRecordJson: TScreensRecord;
  }>
> = ({ screensRecordJson, children }) => {
  const { PLACEHOLDER } = useApp();
  const screensRecord =
    screensRecordJson;
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
        Placeholder: PLACEHOLDER?.Responsive ?? Fragment,
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
