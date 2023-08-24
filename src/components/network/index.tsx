import { useEventListener } from '@hooks/events/useEventListener';
import type { FC } from 'react';
import { Offline } from './Offline';
import { useContext } from '@context/app/Context';

export const Network: FC = () => {
  const { isOffline, onOffline, onOnline } = useContext();
  useEventListener('offline', onOffline);
  useEventListener('online', onOnline);

  if (isOffline) {
    return <Offline />;
  } else {
    return null;
  }
};
