import { TBoxBorderConfig } from '@brysonandrew/utils-box/types';
import { boxBorderCss } from '@brysonandrew/utils-box/css/border/css';
import { formatCss } from '@brysonandrew/utils-box/css/format';

export const boxBorderCssStr = <T extends TBoxBorderConfig>(
  config: T
) => {
  const result = boxBorderCss(config);
  const str = formatCss(result);
  return str;
};
