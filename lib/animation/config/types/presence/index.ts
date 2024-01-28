import { TPresenceConfigKey } from '@brysonandrew/animation/config/types/presence/key';
import { TPresenceConfig } from '@brysonandrew/animation/config/types/presence/config';
import { TPresenceConfigValue } from '@brysonandrew/animation/config/types/presence/value';

export type TPresenceConfigs = readonly TPresenceConfig[];
export type TPresenceConfigRecord<
  A extends TPresenceConfigs,
> = {
  [T in A[number] as TPresenceConfigKey<T>]: TPresenceConfigValue<T>;
};
