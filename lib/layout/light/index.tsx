
import { useMemo } from 'react';
import {
  TAppLayoutProps,
  TLayoutOptionsRecord,
  TPartialDefaultApp,
  TPartialLayoutOptionsRecord,
  TValue,
} from '@brysonandrew/app';
import { withLight } from '@brysonandrew/layout-light/withLight';

export const LayoutLight = <
  T extends TPartialDefaultApp = TPartialDefaultApp,
  V extends TPartialLayoutOptionsRecord = T &
    Pick<TLayoutOptionsRecord, 'LIGHT'>,
>({
  children,
  ...value
}: TAppLayoutProps<T, V>) => {
  type TReturn = TValue<T & V>;
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
