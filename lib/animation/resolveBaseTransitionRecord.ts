import { TBaseTransitionConfigs } from '@brysonandrew/animation/config/types';
import { TAnyRecord } from '@brysonandrew/types';

export const resolveBaseTransitionRecord = <
  T extends TBaseTransitionConfigs,
>(
  baseTransitionConfigs: T,
) => {
  const baseTransitionRecord = {} as TAnyRecord;
  baseTransitionConfigs.forEach((baseTransitionConfig) => {
    const {
      duration,
      ease,
      delay = '',
    } = baseTransitionConfig;
    const key = `${duration}/${delay}/${ease}`;
    baseTransitionRecord[key] = baseTransitionConfig;
  });

  return baseTransitionRecord;
};
