import {
  TBoxBackgroundConfig,
  TBoxBorderConfig,
  TBoxConfig,
  TBoxVariant,
} from '@brysonandrew/utils-box/types';
import {
  BACKGROUND_ATTRIBUTES,
  BORDER_ATTRIBUTES,
} from '@brysonandrew/utils/box/constants';
const isKeyMatch = (
  config: TBoxConfig<TBoxVariant>,
  LOOKUP:
    | typeof BACKGROUND_ATTRIBUTES
    | typeof BORDER_ATTRIBUTES
) => Object.keys(config).some((key) => key in LOOKUP);

export const isBoxBackgroundConfig = (
  config: TBoxConfig<TBoxVariant>
): config is TBoxBackgroundConfig => {
  if (isKeyMatch(config, BACKGROUND_ATTRIBUTES))
    return true;
  return false;
};

export const isBoxBorderConfig = (
  config: TBoxConfig<TBoxVariant>
): config is TBoxBorderConfig => {
  if (isKeyMatch(config, BORDER_ATTRIBUTES)) return true;
  return false;
};
