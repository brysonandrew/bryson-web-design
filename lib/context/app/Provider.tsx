import {
  PropsWithChildren,
  useState,
  type FC,
} from 'react';
import { TAppConfigContext } from './config/types';
import { APP } from './config/constants';

type TProps = TAppConfigContext;
export const Provider: FC<PropsWithChildren<TProps>> = ({
  children,
  ...context
}) => {
  const [isInit, setInit] = useState(false);
  const onInit = () => setInit(true);

  return (
    <APP.Provider
      value={{
        isInit,
        onInit,
        ...context,
      }}
    >
      {children}
    </APP.Provider>
  );
};
