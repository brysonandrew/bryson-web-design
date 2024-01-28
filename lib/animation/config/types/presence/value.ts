import { TPresenceConfig, TTarget } from "@brysonandrew/animation";

export type TPresenceConfigValue<
  T extends TPresenceConfig,
> = {
  initial: TTarget;
  animate: TTarget;
  exit: TTarget;
};
