import { useMemo } from 'react';
import { DEFAULT_STYLE } from './config/constants/style';
import { mergeDeepObjects } from '@brysonandrew/utils-object';
import { TAnyRecord } from '@brysonandrew/config-types';
import { TDefaultStyle } from '@brysonandrew/app/config/types';

type TConfig<S extends TAnyRecord> = { style: S };
export const useAppStyle = <S extends TAnyRecord>({
  style,
}: TConfig<S>) => {
  type TStyle = S & TDefaultStyle;
  // const { isDarkMode } = useDarkMode();

  const appStyle = useMemo(() => {
    // style.COLOR.accent = isDarkMode
    //   ? style.COLOR.accent
    //   : '#0F766E';
    const result = mergeDeepObjects<TStyle>(
      DEFAULT_STYLE as TStyle,
      style,
    );

    return result;
  }, [
    // isDarkMode
  ]);

  return appStyle;
};
