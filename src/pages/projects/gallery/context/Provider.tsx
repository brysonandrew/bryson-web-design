import { PropsWithChildren, useState } from 'react';
import type { FC } from 'react';
import screensRecordJson from './lookup.json';
import { TScreensRecord } from 'ops/types';
const screensRecord =
  screensRecordJson as unknown as TScreensRecord;
import { Gallery } from '.';

export const Provider: FC<PropsWithChildren> = ({
  children,
}) => {
  const [isTransitioningGallery, setTransitioningGallery] =
    useState(false);
  const onDrag = setTransitioningGallery;
  const onMotionBlurStart = () =>
    setTransitioningGallery(true);
  const onMotionBlurEnd = () =>
    setTransitioningGallery(false);

  return (
    <Gallery.Provider
      value={{
        screensRecord,
        isTransitioningGallery,
        onDrag,
        onMotionBlurStart,
        onMotionBlurEnd,
      }}
    >
      {children}
    </Gallery.Provider>
  );
};
