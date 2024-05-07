import { TPreflightsScrollbarManualCssConfig } from '@brysonandrew/uno-preflights/scrollbar/manual';

export const isPreflightsScrollbarManualCss = (
  config: TPreflightsScrollbarManualCssConfig | object
): config is TPreflightsScrollbarManualCssConfig => {
  if (
    typeof config === 'object' &&
    config !== null &&
    'scrollbar' in config &&
    typeof config['scrollbar'] === 'string'
  )
    return true;
  return false;
};
