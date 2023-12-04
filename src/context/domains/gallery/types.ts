import { TScreensRecord } from 'ops/types';

export type TContext = {
  isTransitioningGallery: boolean;
  screensRecord: TScreensRecord;
  onDrag(value: boolean): void;
  onMotionBlurStart(): void;
  onMotionBlurEnd(): void;
}; 
