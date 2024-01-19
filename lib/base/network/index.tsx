import { BackdropBlur } from '@brysonandrew/base/components/layout/backdrop-blur';
import { useEventListener } from '@brysonandrew/hooks/events/useEventListener';
import type { FC } from 'react';
import { useNetwork } from './context/useNetwork';
import { Offline } from './Offline';

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
