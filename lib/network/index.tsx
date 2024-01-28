import { useEventListener } from '@brysonandrew/hooks/events/useEventListener';
import type { FC } from 'react';
import { useNetwork } from '@brysonandrew/network';
import { Offline } from '@brysonandrew/network/Offline';

type TProps = {
  OfflineFC: FC;
};
export const Network: FC<TProps> = ({ OfflineFC = Offline }) => {
  const { isOffline, onOffline, onOnline } = useNetwork();
  useEventListener('offline', onOffline);
  useEventListener('online', onOnline);

  if (isOffline) {
    return <OfflineFC />;
  } else {
    return null;
  }
};

export * from './NetworkProvider';
export * from './Offline';
