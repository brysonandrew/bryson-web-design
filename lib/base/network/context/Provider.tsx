import {
  PropsWithChildren,
  useState,
  type FC,
} from 'react';
import { NETWORK } from './config/constants';

export const Provider: FC<PropsWithChildren> = ({
  children,
}) => {
  const [isOffline, setOffline] = useState(false);
  const onOffline = () => setOffline(true);
  const onOnline = () => setOffline(false);

  return (
    <NETWORK.Provider
      value={{
        isOffline,
        onOffline,
        onOnline,
      }}
    >
      {children}
    </NETWORK.Provider>
  );
};
