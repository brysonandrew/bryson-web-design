import { TPresenceConfig, TTarget } from "@brysonandrew/motion/core/config";

export type TPresenceConfigValue<
  T extends TPresenceConfig,
> = {
  initial: TTarget;
  animate: TTarget;
  exit: TTarget;
};
