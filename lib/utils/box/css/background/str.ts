import { boxBackgroundCss } from '@brysonandrew/utils-box/css/background/css';
import { formatCss } from '@brysonandrew/utils-box/css/format';
import { TBoxBackgroundConfig } from '@brysonandrew/utils-box/types';

export const boxBackgroundCssStr = <
  T extends TBoxBackgroundConfig
>(
  config: T
) => {
  const result = boxBackgroundCss<T>(config);
  const str = formatCss(result);
  return str;
};
