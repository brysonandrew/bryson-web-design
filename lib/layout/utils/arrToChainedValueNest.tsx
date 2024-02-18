import {
  TChildrenHandler,
  TPropsWithChildrenHandler,
} from '@brysonandrew/config-types';
import { FC } from 'react';

export const arrToChainedValueNest = <V extends object>(
  arr: FC<TPropsWithChildrenHandler<V>>[],
  init: TChildrenHandler<V>,
) => {
  return arr.reduce(
    (
      a: TChildrenHandler<V>,
      C: FC<TPropsWithChildrenHandler<V>>,
    ) => {
      const next = (props: V) => <C {...props}>{a}</C>;
      return next;
    },
    init,
  );
};
