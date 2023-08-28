import { useState } from 'react';
import type { FC } from 'react';
import type { TChildrenElement } from '@t/index';
import screensRecordJson from './lookup.json';
import { TScreensRecord } from '@ops/screens/types';
const screensRecord = screensRecordJson as TScreensRecord;
import { Gallery } from '.';

type TProviderProps = {
  children: TChildrenElement;
};
export const Provider: FC<TProviderProps> = ({
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
