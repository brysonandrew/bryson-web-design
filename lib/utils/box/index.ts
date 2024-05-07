import {
  isBoxBackgroundConfig,
  isBoxBorderConfig,
} from '@brysonandrew/utils-box/is';
import { resolveBoxCssKey } from '@brysonandrew/utils-box/keys';
import {
  TBoxVariant,
  TBoxConfig,
  TBoxCommonConfig,
} from '@brysonandrew/utils-box/types';

const resolveCommon = (
  variant: TBoxVariant,
  config: TBoxCommonConfig<typeof variant>
) => ({
  [resolveBoxCssKey(variant, 'Image')]: config['image'],
  [resolveBoxCssKey(variant, 'Color')]: config['color'],
});

export const resolveFill = <T extends TBoxVariant>(
  config: TBoxConfig<T>
) => {
  if (isBoxBackgroundConfig(config)) {
    const variant = 'background' as const;
    const { position, size, ...commonConfig } = config;
    return {
      [`${variant}Position`]: position,
      [`${variant}Size`]: size,
      ...resolveCommon(variant, commonConfig),
    };
  }

  if (isBoxBorderConfig(config)) {
    const variant: TBoxVariant = 'border';
    const { style, width, ...commonConfig } = config;
    return {
      [`${variant}Style`]: style,
      [`${variant}Width`]: width,
      ...resolveCommon(variant, commonConfig),
    };
  }
};

export const resolveBorder = (
  config: TBoxConfig<'border'>
) =>
  resolveFill({
    ...config,
  });

export const resolveBackground = (
  config: TBoxConfig<'background'>
) =>
  resolveFill({
    ...config,
  });

export * from './is';
export * from './keys';
export * from './types';
