import { TChildren } from 'lib/types/dom';
import { FC, PropsWithChildren } from 'react';

export const arrToNestWithProps = <
  P extends PropsWithChildren = PropsWithChildren,
>(
  arr: ([any, FC<any>] | null)[],
  init: TChildren,
  sharedProps: P,
) => {
  return arr.reduce((a: TChildren, c) => {
    if (c === null) return a;
    const [props, C] = c;
    const next = (
      <C {...props} {...sharedProps}>
        {a}
      </C>
    );
    return next;
  }, init);
};
