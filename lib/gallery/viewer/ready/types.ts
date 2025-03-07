import { MotionValue } from 'framer-motion';
import { TMediaRecords } from '@brysonandrew/media/config/types';

export type TBaseProps = {
  count: number;
  mediaRecords: TMediaRecords;
  motionX: MotionValue;
  width: number;
};
