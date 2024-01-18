import { MotionValue } from 'framer-motion';
import { TMediaRecords } from 'lib/media/picture/config/types';

export type TBaseProps = {
  count: number;
  mediaRecords: TMediaRecords;
  motionX: MotionValue;
  width: number;
};
