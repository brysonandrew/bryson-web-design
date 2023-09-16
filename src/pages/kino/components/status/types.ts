import { TStatusRecordKey } from '@pages/kino/context/types';

export type TIncludes = TStatusRecordKey[];

const BASE_INCLUDES = [
  'ConnectionState',
  'IceGatheringState',
  'SignalingState',
  'ChannelState',
] as const;

export type TVariant = 'local' | 'remote';

export const resolveIncludes = (
  variant: TVariant,
): TIncludes =>
  BASE_INCLUDES.map(
    (v) => `${variant}${v}` as TStatusRecordKey,
  );
