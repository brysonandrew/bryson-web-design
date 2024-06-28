import { useEventListener } from '@brysonandrew/hooks-events/useEventListener';
import type { FC } from 'react';
import { useNetwork } from '@brysonandrew/network';
import { Offline } from '@brysonandrew/network/Offline';

type TProps = {
  OfflineFc: FC;
};
export const Network: FC<TProps> = ({ OfflineFc = Offline }) => {
  const { isOffline, onOffline, onOnline } = useNetwork();
  useEventListener('offline', onOffline);
  useEventListener('online', onOnline);

  if (isOffline) {
    return <OfflineFc />;
  } else {
    return null;
  }
};

export * from './NetworkProvider';
export * from './Offline';
