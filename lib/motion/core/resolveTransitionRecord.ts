import { TTransitionConfig } from '@brysonandrew/motion-config-types';

export const resolveTransitionRecord = <
  T extends TTransitionConfig,
>(
  transitionConfigs: readonly T[],
) => {
  type TKey = string;
  const transitionRecord = {} as Record<TKey, T>;
  transitionConfigs.forEach((transitionConfig) => {
    const key = JSON.stringify(transitionConfig);
    transitionRecord[key] = transitionConfig;
  });

  return transitionRecord;
};
