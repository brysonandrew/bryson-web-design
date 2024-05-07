import {
  TTCamelToKebab,
  TTPascalToKebab,
} from '@brysonandrew/config-types';
import { pascalToKebab } from '@brysonandrew/utils-format';
import {
  TBoxBorderConfig,
  TBoxBorderConfigValue,
  TCssBoxBorderTailKey,
} from '@brysonandrew/utils/box/types';

export const boxBorderShorthandCss = ({
  width = 1,
  style = 'solid',
  color = '#000000',
}: TBoxBorderConfig) =>
  `border: ${width} ${style} ${color};
` as const;

type TEntry = [TCssBoxBorderTailKey, TBoxBorderConfigValue];
type TEntries = [
  TCssBoxBorderTailKey,
  TBoxBorderConfigValue
][];
type TKey =
  `border-${TTPascalToKebab<TCssBoxBorderTailKey>}`;
type TResult = Record<TKey, TBoxBorderConfigValue>;
export const boxBorderCss = (config: TBoxBorderConfig) => {
  const entries = Object.entries(config) as TEntries;
  const result = entries.reduce(
    (a, [key, value]: TEntry) => {
      const kebabTail =
        pascalToKebab<TCssBoxBorderTailKey>(key);

      const kebabKey: TKey = `border-${kebabTail}` as const;
      a[kebabKey] = value;
      return a;
    },
    {} as TResult
  );
  return result;
};
