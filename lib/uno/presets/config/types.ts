import { type Preset } from 'unocss';
import {
  WebFontMeta,
  WebFontsOptions,
  WebFontsProviders,
} from '@unocss/preset-web-fonts';
import {
  FONT_KEYS,
  FONT_SHARE_CATEGORIES,
  FONT_SHARE_NAMES,
} from '@brysonandrew/uno-presets/config/constants';
import { TDigit } from '@brysonandrew/config-types';
import { GOOGLE_CATEGORIES } from '@brysonandrew/uno-presets/config/constants/google/categories';
import { GOOGLE_NAMES } from '@brysonandrew/uno-presets/config/constants/google/names';
import { GOOGLE_FONTS } from '@brysonandrew/uno-presets/config/constants/google/fonts';

export type TPreset<T extends object> = Preset<T>;

export type TWebFontOptions = WebFontsOptions;

export type TWebFonts = WebFontsOptions['fonts'];

export type TWebFontsProvider = WebFontsProviders;

export type TWebFontMeta = WebFontMeta;

export type TFontKey = (typeof FONT_KEYS)[number];

export type TFontShareName =
  (typeof FONT_SHARE_NAMES)[number];

export type TFontShareCategory =
  (typeof FONT_SHARE_CATEGORIES)[number];

export type TGoogleName = (typeof GOOGLE_NAMES)[number];

export type TGoogleFonts = (typeof GOOGLE_FONTS)[number];

export type TGoogleCategory =
  (typeof GOOGLE_CATEGORIES)[number];

type TGoogleFontsConfig = {
  provider: 'google';
} & TGoogleFonts;

type TFontShareConfig = {
  key: TFontShareCategory;
  provider: 'fontshare';
  name: TFontShareName;
};

type TBaseWebFontConfig = {
  weights?: `${TDigit}00`[];
  italic?: boolean;
};

export type TResolveWebFontConfig = {
  // key: TFontKey;
  // provider: TWebFontsProvider;
  // name: string;
} & (TGoogleFontsConfig | TFontShareConfig) &
  TBaseWebFontConfig;
