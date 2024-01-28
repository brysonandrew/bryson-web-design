import { TBaseTransitionConfigKey } from '@brysonandrew/animation/config/types/transition/base/key';
import { TEasingDefinition } from '@brysonandrew/animation/config/types/values';

export type TDurationValue = number;
export type TEaseValue = TEasingDefinition;
export type TDelayValue = number;

export type TBaseTransition = {
  duration: TDurationValue;
  ease: TEasingDefinition;
  delay: TDelayValue;
};

export type TBaseTransitionConfig = TBaseTransition;
export type TBaseTransitionConfigs =
  readonly TBaseTransitionConfig[];

export type TBaseTransitionRecord<
  T extends TBaseTransitionConfigs,
> = {
  [U in T[number] as TBaseTransitionConfigKey<U>]: U;
};
