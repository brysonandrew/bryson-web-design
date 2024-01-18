import { TScreensRecord } from '@brysonandrew/lib/media/picture/config/types';

export type TContext = {
  isTransitioningGallery: boolean;
  screensRecord: TScreensRecord;
  onDrag(value: boolean): void;
  onMotionBlurStart(): void;
  onMotionBlurEnd(): void;
}; 
