import { TPresenceConfigs } from '@brysonandrew/motion-config-types';
import { TPresenceConfigValue } from '@brysonandrew/motion-config-types';
import { resolveRecordKey } from '@brysonandrew/motion-core';
import { resolveRecordValue } from '@brysonandrew/motion-core';
import { TAnyRecord } from '@brysonandrew/config-types';

export const resolvePresenceRecord = <
  A extends TPresenceConfigs,
>(
  presenceConfigs: A,
) => {
  const presenceRecord = presenceConfigs.reduce(
    (a, presenceConfig) => {
      type T = typeof presenceConfig;
      const recordKey = resolveRecordKey<T>(presenceConfig);
      const recordValue: TPresenceConfigValue<T> =
        resolveRecordValue<T>(presenceConfig);
      a[recordKey] = recordValue as any;
      return a;
    },
    {} as TAnyRecord,
  );
  return presenceRecord;
};
