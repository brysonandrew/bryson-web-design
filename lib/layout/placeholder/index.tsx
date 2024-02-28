import { useMemo } from 'react';
import {
  TAppLayoutProps,
  TLayoutOptionsRecord,
  TPartialDefaultApp,
  TPartialLayoutOptionsRecord,
  TValue,
} from '@brysonandrew/app';
import { withPlaceholder } from '@brysonandrew/placeholder';

export const LayoutPlaceholder = <
  T extends TPartialDefaultApp = TPartialDefaultApp,
  V extends TPartialLayoutOptionsRecord = T &
    Pick<TLayoutOptionsRecord, 'PLACEHOLDER'>,
>({
  children,
  ...value
}: TAppLayoutProps<T, V>) => {
  type TReturn = TValue<V>;
  const nextValue = useMemo<TReturn>(() => {
    const PLACEHOLDER = withPlaceholder();
    return { ...value, PLACEHOLDER } as TReturn;
  }, [value]);

  return <>{children(nextValue)}</>;
};





