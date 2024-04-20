import { TPresenceConfig, TTarget } from "@brysonandrew/motion-core";

export type TPresenceConfigValue<
  T extends TPresenceConfig,
> = {
  initial: TTarget;
  animate: TTarget;
  exit: TTarget;
};
