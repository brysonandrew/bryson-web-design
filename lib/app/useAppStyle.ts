import { useMemo } from 'react';
import { TDefaultStyle } from '@brysonandrew/app/config/types';
import { DEFAULT_STYLE } from './config/constants/style';
import { mergeDeepObjects } from '@brysonandrew/utils-object';

type TConfig = { style: any };
export const useAppStyle = ({ style }: TConfig) => {
  // const initStyle =
  //   isDarkMode && style.DARK
  //     ? mergeDeepObjects<S>(style, style.DARK)
  //     : style;

  const appStyle = useMemo(() => {
    const result = mergeDeepObjects<TDefaultStyle>(
      DEFAULT_STYLE,
      style,
    );

    return result;
  }, []);

  return appStyle;
};
