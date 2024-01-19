import { TStatusRecordKey } from '@pages/_workshop/kino/config/types';

export type TIncludes = TStatusRecordKey[];

export const BASE_INCLUDES = [
  'channelState',
  'connectionState',
  'signalingState',
  'iceGatheringState',
] as const;
