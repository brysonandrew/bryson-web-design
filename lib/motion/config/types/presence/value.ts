import {
  TTarget,
  TPresenceConfig,
} from '@brysonandrew/motion-config-types';

export type TPresenceConfigValue<
  T extends TPresenceConfig
> = {
  initial: TTarget;
  animate: TTarget;
  exit: TTarget;
};
