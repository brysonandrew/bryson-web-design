import { TPresenceConfigKey } from '@brysonandrew/motion-core';
import { TPresenceConfig } from '@brysonandrew/motion-core';
import { TPresenceConfigValue } from '@brysonandrew/motion-core';

export type TPresenceConfigs = readonly TPresenceConfig[];
export type TPresenceConfigRecord<
  A extends TPresenceConfigs,
> = {
  [T in A[number] as TPresenceConfigKey<T>]: TPresenceConfigValue<T>;
};
