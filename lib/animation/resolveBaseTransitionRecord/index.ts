import { _VD } from '@app/animation';
import { TBaseTransitionConfigs } from '@brysonandrew/animation/config/types/transition/base';
import { TBaseTransitionConfigKey } from '@brysonandrew/animation/config/types/transition/base/key';
import { resolveEaseStringify } from '@brysonandrew/animation/resolveBaseTransitionRecord/resolveEaseStringify';
import { TAnyRecord } from '@brysonandrew/types';

export const resolveBaseTransitionRecord = <
  T extends TBaseTransitionConfigs,
>(
  baseTransitionConfigs: T,
) => {
  const baseTransitionRecord = {} as TAnyRecord;
  baseTransitionConfigs.forEach((baseTransitionConfig) => {
    const { duration, ease, delay } = baseTransitionConfig;
    const easeKey = `${resolveEaseStringify(
      ease,
    )}` as const;
    const key: TBaseTransitionConfigKey<
      typeof baseTransitionConfig
    > = `${duration}${_VD}${easeKey}${_VD}${delay}`;
    baseTransitionRecord[key] = baseTransitionConfig;
  });

  return baseTransitionRecord;
};
