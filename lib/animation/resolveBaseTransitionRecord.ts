import {
  TBaseTransitionConfig,
  TBaseTransitionConfigs,
} from '@brysonandrew/animation/config/types';
import { BezierDefinition } from 'framer-motion';

export const resolveBaseTransitionRecord = <
  T extends TBaseTransitionConfigs,
>(
  baseTransitionConfigs: T,
) => {
  type TConfig = T[number];
  type TDuration = TConfig['duration'];
  type TDelay = TConfig['delay'];
  type TEase = TConfig['ease'];
  type TEaseKey<E extends TEase> =
    E extends BezierDefinition
      ? `${E[0]},${E[1]},${E[2]},${E[3]}`
      : E;
  type TKey = `${TDuration}/${TDelay}/${TEaseKey<TEase>}`;
  const baseTransitionRecord = {} as Record<
    TKey,
    TBaseTransitionConfig
  >;
  baseTransitionConfigs.forEach((baseTransitionConfig) => {
    const {
      duration,
      ease,
      delay = '',
    } = baseTransitionConfig;
    const key = `${duration}/${delay}/${ease}` as TKey;
    baseTransitionRecord[key] = baseTransitionConfig;
  });

  return baseTransitionRecord;
};
