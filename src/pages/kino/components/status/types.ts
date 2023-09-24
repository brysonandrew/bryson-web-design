import { TStatusRecordKey } from '@pages/kino/config/types';

export type TIncludes = TStatusRecordKey[];

export const BASE_INCLUDES = [
  'channelState',
  'connectionState',
  'signalingState',
  'iceGatheringState',
] as const;
