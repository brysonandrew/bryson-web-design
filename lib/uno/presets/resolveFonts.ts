import { TResolveWebFontConfig } from '@brysonandrew/config-types';
import { resolveWebFont } from '@brysonandrew/uno-presets/resolveWebFont';

export const resolveFonts = (
  fonts: readonly TResolveWebFontConfig[],
) =>
  fonts.reduce((a, c) => {
    const record = resolveWebFont(c);
    return { ...a, ...record };
  }, {});
