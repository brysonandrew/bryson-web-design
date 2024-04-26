import { TPresenceConfigKey } from '@brysonandrew/motion-config-types';
import { TPresenceConfig } from '@brysonandrew/motion-config-types';
import { TPresenceConfigValue } from '@brysonandrew/motion-config-types';

export type TPresenceConfigs = readonly TPresenceConfig[];
export type TPresenceConfigRecord<
  A extends TPresenceConfigs,
> = {
  [T in A[number] as TPresenceConfigKey<T>]: TPresenceConfigValue<T>;
};
