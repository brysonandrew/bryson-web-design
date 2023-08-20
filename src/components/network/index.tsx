import { useEventListener } from '@hooks/events/useEventListener';
import type { FC } from 'react';
import { Offline } from './Offline';
import { useContext } from '@state/Context';

export const Network: FC = () => {
  const { isOffline, dispatch } = useContext();
  useEventListener('offline', () => {
    dispatch({ type: 'offline' });
  });
  useEventListener('online', () => {
    dispatch({ type: 'online' });
  });

  if (isOffline) {
    return <Offline />;
  } else {
    return null;
  }
};
