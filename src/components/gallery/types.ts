import { MotionValue } from 'framer-motion';
import { TMediaRecords } from '@ops/screens/types/media';

export type TBaseProps = {
  count: number;
  mediaRecords: TMediaRecords;
  motionX: MotionValue;
  width: number;
};
