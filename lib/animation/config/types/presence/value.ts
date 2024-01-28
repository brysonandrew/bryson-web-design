import { TPresenceConfig, TTarget } from '@app/animation';

export type TPresenceConfigValue<
  T extends TPresenceConfig,
> = {
  initial: TTarget;
  animate: TTarget;
  exit: TTarget;
};
