import { PropsWithChildren, useState } from 'react';
import { TAppConfig, TStyle, TValue } from './config/types';
import { APP } from './config/constants';
import { useColorSetRecord } from './hooks/useColorSetRecord';
import { useLayoutRecord } from './hooks/useLayoutRecord';
import { STYLE as DEFAULT_STYLE } from './style';

type TProps<S extends TStyle> = Partial<
  PropsWithChildren<TAppConfig<S>>
>;
export const Provider = <S extends TStyle>({
  children,
  ...rest
}: TProps<S>) => {
  const [isInit, setInit] = useState(false);
  const onInit = () => setInit(true);

  const appConfig = {
    ...DEFAULT_STYLE,
    ...rest,
  };

  const layoutRecord = useLayoutRecord(appConfig);
  const colorSetRecord = useColorSetRecord(appConfig);

  const value: TValue = {
    ...appConfig,
    isInit,
    onInit,
    ...layoutRecord,
    ...colorSetRecord,
  };

  return (
    <APP.Provider value={value}>{children}</APP.Provider>
  );
};
