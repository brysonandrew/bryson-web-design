import { useMemo } from 'react';
import {
  TAppLayoutProps,
  TPartialDefaultStyle,
  TValue,
} from '@brysonandrew/app';
import { withLight } from '@brysonandrew/layout-light/withLight';

export const LayoutLight = <
  S extends TPartialDefaultStyle = TPartialDefaultStyle,
>({
  children,
  ...value
}: TAppLayoutProps<S>) => {
  const nextValue = useMemo<TValue<S>>(() => {
    const LIGHT = withLight(value);
    return { ...value, LIGHT } as TValue<S>;
  }, [value]);

  return <>{children(nextValue)}</>;
};

export * from './withLight';
export * from './config/types';
export * from './marker/Motion';
export * from './marker';
export * from './marker/markerProps';