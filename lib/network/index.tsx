import { BackdropBlur } from '@lib/components/layout/backdrop-blur';
import { useEventListener } from '@lib/hooks/events/useEventListener';
import type { FC } from 'react';
import { useNetwork } from './context/useNetwork';
import { Offline } from './Offline';

export const Network: FC = () => {
  const { isOffline, onOffline, onOnline } = useNetwork();
  useEventListener('offline', onOffline);
  useEventListener('online', onOnline);

  if (true) {
    return (
      <BackdropBlur>
        <Offline key='Offline' />
      </BackdropBlur>
    );
  } else {
    return null;
  }
};
