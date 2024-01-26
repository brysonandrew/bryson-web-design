import { TTransitionConfig } from '@brysonandrew/animation/config/types';
import { Easing } from 'framer-motion';

type TStringify<
  T extends string | Easing | undefined | number,
> = T extends string ? T : T extends number ? T : '';

export const resolveTransitionRecord = <
  T extends TTransitionConfig,
>(
  transitionConfigs: readonly TTransitionConfig[],
) => {
  // type TDelay = T['delay'];
  // type TEase = T['ease'];
  type TKey = string;
  //   `duration${T['duration']}Ease${TStringify<TEase>}Delay${TStringify<TDelay>}`;
  const transitionRecord = {} as Record<
    TKey,
    TTransitionConfig
  >;
  return transitionRecord;
};
