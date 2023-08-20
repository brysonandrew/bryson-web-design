import { useEventListener } from '@hooks/events/useEventListener';
import { useState } from 'react';
import type { FC } from 'react';
import { Offline } from './Offline';

export const Network: FC = () => {
  const [isOffline, setOffline] = useState<boolean>(false);
  useEventListener('offline', () => {
    setOffline(true);
  });
  useEventListener('online', () => {
    setOffline(false);
  });

  if (isOffline) {
    return <Offline />;
  } else {
    return null;
  }
};
