import {
  PropsWithChildren,
  useState,
  type FC,
} from 'react';
import { App } from '.';

export const Provider: FC<PropsWithChildren> = ({
  children,
}) => {
  const [isOffline, setOffline] = useState(false);
  const [isInit, setInit] = useState(false);
  const onInit = () => setInit(true);
  const onOffline = () => setOffline(true);
  const onOnline = () => setOffline(false);

  return (
    <App.Provider
      value={{
        isInit,
        isOffline,
        onInit,
        onOffline,
        onOnline,
      }}
    >
      {children}
    </App.Provider>
  );
};
