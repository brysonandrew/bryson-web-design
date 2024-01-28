import { TScreensRecord } from '@brysonandrew/media';
import { FC } from 'react';

export type TViewerContext = {
  Placeholder: FC;
  isTransitioningGallery: boolean;
  screensRecord: TScreensRecord;
  onDrag(value: boolean): void;
  onMotionBlurStart(): void;
  onMotionBlurEnd(): void;
};
