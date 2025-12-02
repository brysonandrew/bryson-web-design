import { useMemo } from 'react';
import { DEFAULT_STYLE } from './config/constants/style';
import { mergeDeepObjects } from '@brysonandrew/utils-object';
import { TAnyRecord } from '@brysonandrew/config-types';
import { TDefaultStyle } from '@brysonandrew/app/config/types';
import { useDarkMode } from '@brysonandrew/dark-mode';
// import { CUSTOM_STYLE } from '@app/style';

// type Mutable<T> = {
//   -readonly [P in keyof T]: T[P];
// };

type TConfig<S extends TAnyRecord> = { style: S };
export const useAppStyle = <S extends TAnyRecord>({
  style,
}: TConfig<S>) => {
  type TStyle = S & TDefaultStyle;
  const { isDarkMode } = useDarkMode();

  const appStyle = useMemo<TStyle>(() => {
    const result = mergeDeepObjects<TStyle>(
      DEFAULT_STYLE as TStyle,
      style,
    );

    return result;
  }, []);

  // (appStyle as Mutable<TStyle>).COLOR.accent = isDarkMode
  //   ? CUSTOM_STYLE.COLOR.accent
  //   : '#4A63D9';

  return appStyle;
};
