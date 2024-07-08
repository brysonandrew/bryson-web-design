import { TMediaRecords } from '@brysonandrew/media/config/types';
import { IMAGE_STATUSES } from '@pages/index/build/constants';

export type TContext = {
  records: TMediaRecords | null;
  updateRecords(next: TMediaRecords): void;
  replaceRecord(src: string): void;
};

export type TPositionStyle = {
  x: number;
  z: number;
  rotateY: number;
};

export type TImageStatuses = typeof IMAGE_STATUSES;
export type TImageStatus = TImageStatuses[number];
