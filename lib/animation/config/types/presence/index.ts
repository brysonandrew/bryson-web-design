import { TPresenceConfigKey } from '@brysonandrew/animation/config/types/presence/key';
import { TPresenceConfig } from '@brysonandrew/animation/config/types/presence/config';

export type TPresenceConfigs = readonly TPresenceConfig[];

export type TPresenceConfigRecord<
  T extends TPresenceConfigs,
> = {
  [U in T[number] as TPresenceConfigKey<U>]: U;
};
