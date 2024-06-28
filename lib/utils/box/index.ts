import { TTCamelToPascal } from '@brysonandrew/config-types';
import { resolveBoxCssKey } from '@brysonandrew/utils-box/keys';
import {
  TBoxVariant,
  TBoxCommonConfig,
  TBoxBorderConfig,
  TBoxBackgroundConfig,
} from '@brysonandrew/utils-box/types';
import { camelToPascal } from '@brysonandrew/utils-format';

const resolveCommon = (
  variant: TBoxVariant,
  config: TBoxCommonConfig<typeof variant>
) => ({
  [resolveBoxCssKey(variant, 'Image')]: config['image'],
  [resolveBoxCssKey(variant, 'Color')]: config['color'],
});

export const resolveBoxBorder = ({
  image,
  color,
  ...config
}: TBoxBorderConfig) => {
  type TFromKey = Extract<keyof typeof config, string>;
  type TToKey =
    `${typeof variant}${TTCamelToPascal<TFromKey>}`;
  type TValue = any; // (typeof config)[TToKey];

  const variant: TBoxVariant = 'border';
  const keys = Object.keys(config) as TFromKey[];
  const result = keys.reduce((a, c: TFromKey) => {
    const key: TToKey = `${variant}${camelToPascal(
      c
    )}` as const;
    const value: TValue = config[c];
    a[key] = value;
    return a;
  }, {} as Record<TToKey, TValue>);
  return {
    ...result,
    ...resolveCommon(variant, { image, color }),
  };
};

export const resolveBoxBackground = ({
  image,
  color,
  ...config
}: TBoxBackgroundConfig) => {
  const variant = 'background' as const;
  type TFromKey = Extract<keyof typeof config, string>;
  type TToKey =
    `${typeof variant}${TTCamelToPascal<TFromKey>}`;
  type TValue = any;//(typeof config)[TFromKey];
  const keys = Object.keys(config) as TFromKey[];
  const result = keys.reduce((a, c: TFromKey) => {
    const key: TToKey = `${variant}${camelToPascal(
      c
    )}` as const;
    const value: TValue = config[c];
    a[key] = value;
    return a;
  }, {} as Record<TToKey, TValue>);
  return {
    ...result,
    ...resolveCommon(variant, { image, color }),
  };
};

export * from './constants';
export * from './is';
export * from './keys';
export * from './types';
export * from './css/format';
export * from './css/border/css';
export * from './css/border/str';
export * from './css/background/css';
export * from './css/background/str';
