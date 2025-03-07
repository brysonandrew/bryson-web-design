import { TTCamelToKebab } from '@brysonandrew/config-types';
import { camelToKebab } from '@brysonandrew/utils-format';
import { TBoxBorderConfig } from '@brysonandrew/utils-box/types';

export const boxBorderShorthandCss = ({
  width = 1,
  style = 'solid',
  color = '#000000',
}: TBoxBorderConfig) =>
  `border: ${width} ${style} ${color};
` as const;

export const boxBorderCss = <T extends TBoxBorderConfig>(
  config: T
) => {
  type TFromKey = Extract<keyof typeof config, string>;
  const keys = Object.keys(config) as TFromKey[];
  type TToKey = `border-${TTCamelToKebab<TFromKey>}`;
  const result = keys.reduce<Record<TToKey, T[TFromKey]>>(
    (a, key: TFromKey) => {
      const kebabTail = camelToKebab<TFromKey>(key);

      const kebabKey: TToKey =
        `border-${kebabTail}` as const;
      a[kebabKey] = config[key];
      return a;
    },
    {} as Record<TToKey, T[TFromKey]>
  );

  return result;
};
