import { useMemo } from 'react';
import {
  TAppLayoutProps,
  TLayoutOptionsRecord,
  TPartialDefaultStyle,
  TPartialLayoutOptionsRecord,
  TValue,
} from '@brysonandrew/app';
import { withPlaceholder } from '@brysonandrew/placeholder';

export const LayoutPlaceholder = <
  S extends TPartialDefaultStyle = TPartialDefaultStyle,
  L extends TPartialLayoutOptionsRecord = TPartialLayoutOptionsRecord,
  V extends TPartialLayoutOptionsRecord = L &
    Pick<TLayoutOptionsRecord, 'PLACEHOLDER'>,
>({
  children,
  ...value
}: TAppLayoutProps<S, L, V>) => {
  type TReturn = TValue<S, V>;
  const nextValue = useMemo<TReturn>(() => {
    const PLACEHOLDER = withPlaceholder();
    return { ...value, PLACEHOLDER } as TReturn;
  }, [value]);

  return <>{children(nextValue)}</>;
};
