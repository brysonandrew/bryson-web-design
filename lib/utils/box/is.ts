import {
  TBackgroundConfig,
  TBorderConfig,
  TBoxConfig,
  TBoxVariant,
} from '@brysonandrew/utils/box/types';

export const isBoxBackgroundConfig = (
  config: TBoxConfig<TBoxVariant>
): config is TBackgroundConfig => {
  if (config.variant === 'background') return true;
  return false;
};
export const isBoxBorderConfig = (
  config: TBoxConfig<TBoxVariant>
): config is TBorderConfig => {
  if (config.variant === 'border') return true;
  return false;
};
