import { _VD } from '@brysonandrew/motion-core';
import { TBaseTransitionConfigs } from '@brysonandrew/motion-core';
import { TBaseTransitionConfigKey } from '@brysonandrew/motion-core';
import { resolveEaseStringify } from '@brysonandrew/motion-core';
import { TAnyRecord } from '@brysonandrew/config-types';

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
