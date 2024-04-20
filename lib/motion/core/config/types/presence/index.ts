import { TPresenceConfigKey } from '@brysonandrew/motion/core/config/types/presence/key';
import { TPresenceConfig } from '@brysonandrew/motion/core/config/types/presence/config';
import { TPresenceConfigValue } from '@brysonandrew/motion/core/config/types/presence/value';

export type TPresenceConfigs = readonly TPresenceConfig[];
export type TPresenceConfigRecord<
  A extends TPresenceConfigs,
> = {
  [T in A[number] as TPresenceConfigKey<T>]: TPresenceConfigValue<T>;
};
