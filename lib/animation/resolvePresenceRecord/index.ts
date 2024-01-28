import { TPresenceConfigs } from '@brysonandrew/animation/config/types/presence';
import { resolveRecordKey } from '@brysonandrew/animation/resolvePresenceRecord/key';
import { resolveRecordValue } from '@brysonandrew/animation/resolvePresenceRecord/value';
import { TAnyRecord } from '@brysonandrew/types';

export const resolvePresenceRecord = <
  T extends TPresenceConfigs,
>(
  presenceConfigs: T,
) => {
  const presenceRecord = presenceConfigs.reduce(
    (a, presenceConfig) => {
      const recordKey =
        resolveRecordKey<typeof presenceConfig>(
          presenceConfig,
        );
      const recordValue =
        resolveRecordValue<typeof presenceConfig>(
          presenceConfig,
        );
      a[recordKey] = recordValue;
      return a;
    },
    {} as TAnyRecord,
  );
  return presenceRecord;
};
