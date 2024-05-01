import {
  isBoxBackgroundConfig,
  isBoxBorderConfig,
} from '@brysonandrew/utils/box/is';
import {
  TBoxVariant,
  TBoxConfig,
  TBoxVariantTail,
  TCssBoxTailKey,
  TCssBoxBorderTailKey,
} from '@brysonandrew/utils/box/types';


export const resolveFill = <T extends TBoxVariant>(
  config: TBoxConfig<T>
) => {
  const { variant = 'background', color, image } = config;

  const result = {
    [resolveBoxCssKey(variant,'Image')]: image,
    [resolveBoxCssKey(variant,'Color')]: color,
  };
  if (isBoxBackgroundConfig(config)) {
    const { position, size } = config;
    return {
      [`${variant}Position`]: position,
      [`${variant}Size`]: size,
      ...result,
    };
  }

  if (isBoxBorderConfig(config)) {
    const { style, width } = config;
    return {
      [`${variant}Style`]: style,
      [`${variant}Width`]: width,
    };
  }
};

export const resolveBorder = (
  config: TBoxConfig<'border'>
) =>
  resolveFill({
    variant: 'border',
    ...config,
  });

export const resolveBackground = (
  config: TBoxConfig<'background'>
) =>
  resolveFill({
    variant: 'background',
    ...config,
  });
