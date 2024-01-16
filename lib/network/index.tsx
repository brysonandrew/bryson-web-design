import { useEventListener } from '@lib/hooks/events/useEventListener';
import type { FC } from 'react';
import { useNetwork } from './context/useNetwork';
import { Offline } from './Offline';

export const Network: FC = () => {
  const { isOffline, onOffline, onOnline } = useNetwork();
  useEventListener('offline', onOffline);
  useEventListener('online', onOnline);

  if (isOffline) {
    return <Offline />;
  } else {
    return null;
  }
};
