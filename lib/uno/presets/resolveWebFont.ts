import {
  TResolveWebFontConfig,
  TWebFonts,
} from '@brysonandrew/uno-presets/config/types';

export const resolveWebFont = ({
  key,
  name,
  weights,
  provider,
  italic,
}: TResolveWebFontConfig): TWebFonts => ({
  [key]: {
    name,
    weights,
    provider,
    italic,
  },
});
