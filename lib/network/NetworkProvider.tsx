import {
  createContext,
  PropsWithChildren,
  useContext,
  useState,
  type FC,
} from 'react';

type TContext = {
  isOffline: boolean;
  onOffline(): void;
  onOnline(): void;
};

const NETWORK = createContext({} as TContext);

export const useNetwork = (): TContext =>
  useContext<TContext>(NETWORK);

export const NetworkProvider: FC<PropsWithChildren> = ({
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
