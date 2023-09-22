import { TStatusRecordKey } from '@pages/kino/config/types';

export type TIncludes = TStatusRecordKey[];

export const BASE_INCLUDES = [
  'channelState',
  'signalingState',
  'iceGatheringState',
  'connectionState',
] as const;
