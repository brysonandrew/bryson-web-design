import { BackdropBlur } from '@brysonandrew/layout/backdrop-blur';
import { useEventListener } from '@brysonandrew/hooks/events/useEventListener';
import type { FC } from 'react';
import { Offline } from './Offline';
import { useNetwork } from '@brysonandrew/network';

export const Network: FC = () => {
  const { isOffline, onOffline, onOnline } = useNetwork();
  useEventListener('offline', onOffline);
  useEventListener('online', onOnline);

  if (isOffline) {
    return (
      <BackdropBlur>
        <Offline key='Offline' />
      </BackdropBlur>
    );
  } else {
    return null;
  }
};

export * from './NetworkProvider';
export * from './Offline';