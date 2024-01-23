export const IMAGE_PLACEHOLDER_ID = 'IMAGE_PLACEHOLDER_ID';
export const PLACEHOLDER_LAYOUT_ID =
  'PLACEHOLDER_LAYOUT_ID';
  import { TScreensLookup } from '@brysonandrew/media';

  export const PNG_EXT = 'png';
  export const WEBP_EXT = 'webp';
  export const DEFAULT_EXT = PNG_EXT;
  
  export const EXTS = [PNG_EXT, WEBP_EXT] as const;
  
  export const EMPTY_SCREENS_LOOKUP: TScreensLookup = {
    [WEBP_EXT]: {},
    [PNG_EXT]: {},
  };
  