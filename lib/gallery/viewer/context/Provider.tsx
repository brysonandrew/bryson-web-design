import { PropsWithChildren, useState } from 'react';
import type { FC } from 'react';
import screensRecordJson from './lookup.json';
import { TScreensRecord } from 'lib/media/picture/config/types';
const screensRecord =
  screensRecordJson as unknown as TScreensRecord;
import { VIEWER } from './constants';

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
