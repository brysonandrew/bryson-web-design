import { MotionValue } from 'framer-motion';
import { TMediaRecords } from '@ops/screens/process/config/types';

export type TBaseProps = {
  count: number;
  mediaRecords: TMediaRecords;
  motionX: MotionValue;
  width: number;
};
