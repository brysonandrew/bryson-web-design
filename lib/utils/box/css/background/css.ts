export const boxBackgroundColorCss = (
  value: string
) => `background-color: ${value};
`;
export const boxBackgroundImageCss = (
  value: string
) => `background-image: ${value};
`;

import { TTCamelToKebab } from '@brysonandrew/config-types';
import { camelToKebab } from '@brysonandrew/utils-format';
import { TBoxBackgroundConfig } from '@brysonandrew/utils-box/types';
import { formatCss } from '@brysonandrew/utils-box/css/format';

export const boxBackgroundCss = <
  T extends TBoxBackgroundConfig
>(
  config: T
) => {
  type TFromKey = Extract<keyof typeof config, string>;
  const keys = Object.keys(config) as TFromKey[];
  type TToKey = `background-${TTCamelToKebab<TFromKey>}`;
  const result = keys.reduce<Record<TToKey, T[TFromKey]>>(
    (a, key: TFromKey) => {
      const kebabTail = camelToKebab<TFromKey>(key);

      const kebabKey: TToKey =
        `background-${kebabTail}` as const;
      a[kebabKey] = config[key];
      return a;
    },
    {} as Record<TToKey, T[TFromKey]>
  );

  return result;
};
