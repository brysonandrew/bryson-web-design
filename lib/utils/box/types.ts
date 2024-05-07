import { CSSProperties } from 'react';

export type TBoxVariant = 'background' | 'border';

export type TBoxVariantTail<
  T extends string,
  V extends TBoxVariant = TBoxVariant
> = T extends `${V}${infer R}`
  ? R extends ''
    ? never
    : R
  : never;

type TCssKeys = keyof CSSProperties;

export type TCssBoxTailKey<T extends TBoxVariant> =
  TBoxVariantTail<TCssKeys, T>;

export type TCssBoxBackgroundTailKey = TBoxVariantTail<
  TCssKeys,
  'background'
>;

export type TBoxBackgroundConfig = {
  size?: CSSProperties['backgroundSize'];
  position?: CSSProperties['backgroundPosition'];
  clip?: CSSProperties['backgroundClip'];
  blendMode?: CSSProperties['backgroundBlendMode'];
  repeat?: CSSProperties['backgroundRepeat'];
  color?: CSSProperties['backgroundColor'];
  image?: CSSProperties['backgroundImage'];
};

export type TCssBoxBorderTailKey = TBoxVariantTail<
  TCssKeys,
  'border'
>;
export type TBoxBorderConfigKey =
  Lowercase<TCssBoxBorderTailKey>;
export type TBoxBorderConfigValue<
  T extends TCssBoxBorderTailKey = TCssBoxBorderTailKey
> = CSSProperties[`border${T}`];
export type TBoxBorderConfigAttr<
  T extends TCssBoxBorderTailKey
> = Record<Lowercase<T>, TBoxBorderConfigValue<T>>;

export type TBoxBorderConfigAll =
  TBoxBorderConfigAttr<'Width'> &
    TBoxBorderConfigAttr<'Style'> &
    TBoxBorderConfigAttr<'Color'> &
    TBoxBorderConfigAttr<'Image'>;
export type TBoxBorderConfig = Partial<TBoxBorderConfigAll>;
// TBoxBorderConfigAttr<TCssBoxBorderTailKey>;

export type TBoxConfig<
  T extends TBoxVariant = 'background'
> = T extends 'background'
  ? TBoxBackgroundConfig
  : T extends 'border'
  ? TBoxBorderConfig
  : never;

export type TBoxCommonConfig<T extends TBoxVariant> = Pick<
  TBoxConfig<T>,
  'color' | 'image'
>;
