import { MotionValue } from 'framer-motion';
import {
  TImageRecord,
  TImageResolverEntries,
} from '@t/screens';

export type TBaseProps = {
  count: number;
  items: TImageResolverEntries;
  imageRecord?: TImageRecord;
  motionX: MotionValue;
  width: number;
};
