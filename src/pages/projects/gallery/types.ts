import { MotionValue } from 'framer-motion';
import {
  TImageRecord,
  TImageResolverEntries,
} from '@t/screens';
import { useWidth } from './hooks/useWidth';

export type TWidth = ReturnType<typeof useWidth>['width'];
export type TBaseProps = {
  isReady: boolean;
  count: number;
  items: TImageResolverEntries;
  imageRecord?: TImageRecord;
  motionX: MotionValue;
  width: TWidth;
};
