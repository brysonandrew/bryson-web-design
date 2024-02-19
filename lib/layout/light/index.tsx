import { useMemo } from 'react';
import {
  TAppLayoutProps,
  TLayoutOptionsRecord,
  TPartialDefaultStyle,
  TPartialLayoutOptionsRecord,
  TValue,
} from '@brysonandrew/app';
import { withLight } from '@brysonandrew/layout-light/withLight';

export const LayoutLight = <
  S extends TPartialDefaultStyle = TPartialDefaultStyle,
  L extends TPartialLayoutOptionsRecord = TPartialLayoutOptionsRecord,
  V extends TPartialLayoutOptionsRecord = L &
    Pick<TLayoutOptionsRecord, 'LIGHT'>,
>({
  children,
  ...value
}: TAppLayoutProps<S, L, V>) => {
  type TReturn = TValue<S, V>;
  const nextValue = useMemo(() => {
    const LIGHT = withLight(value);
    return { ...value, LIGHT } as TReturn;
  }, [value]);

  return <>{children(nextValue)}</>;
};

export * from './withLight';
export * from './config/types';
export * from './marker/Motion';
export * from './marker';
export * from './marker/markerProps';
