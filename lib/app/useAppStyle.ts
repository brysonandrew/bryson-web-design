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
  // const initStyle =
  //   isDarkMode && style.DARK
  //     ? mergeDeepObjects<S>(style, style.DARK)
  //     : style;

  const appStyle = useMemo(() => {
    const result = mergeDeepObjects<TStyle>(
      DEFAULT_STYLE as TStyle,
      style,
    );

    return result;
  }, []);

  return appStyle;
};
