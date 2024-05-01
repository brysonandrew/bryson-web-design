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

export type TCssBoxTailKey<T extends TBoxVariant> = TBoxVariantTail<TCssKeys, T>;

export type TCssBoxBackgroundTailKey = TBoxVariantTail<
  TCssKeys,
  'background'
>;

export type TBackgroundConfig = {
  variant?: 'background';
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

export type TBorderConfig = {
  variant?: 'border';
  width?: CSSProperties['borderWidth'];
  style?: CSSProperties['borderStyle'];
  color?: CSSProperties['borderColor'];
  image?: CSSProperties['borderImage'];
};

export type TBoxConfig<
  T extends TBoxVariant = 'background'
> = T extends 'background'
  ? TBackgroundConfig
  : T extends 'border'
  ? TBorderConfig
  : never;
