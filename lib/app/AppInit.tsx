import {
  TAppInitProps,
  TDefaultStyle,
  TPartialDefaultStyle,
} from '@brysonandrew/app/config/types';
import { useAppStyle } from '@brysonandrew/app/useAppStyle';
import { useInit } from '@brysonandrew/app/useInit';
import { DEFAULT_CONFIG } from '@brysonandrew/app/config/constants';

type TProps<S extends TPartialDefaultStyle> =
  TAppInitProps<S>;
export const AppInit = <S extends TPartialDefaultStyle>({
  children,
  style,
  ...rest
}: TProps<S>) => {
  const initState = useInit();
  const appStyle: S & TDefaultStyle = useAppStyle({
    style,
  });

  const value = {
    ...DEFAULT_CONFIG,
    initState,
    ...appStyle,
    ...rest,
  } as const;

  return <>{children(value)}</>;
};
