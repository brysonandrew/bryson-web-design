import { useEventListener } from '@hooks/useEventListener';
import { useState } from 'react';
import type { FC, ReactElement } from 'react';
import { Offline } from './Offline';
import { TChildren } from '@t/index';

type TProps = {
  children: TChildren;
};
export const Network: FC<TProps> = ({ children }) => {
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
    return <>{children}</>;
  }
};
