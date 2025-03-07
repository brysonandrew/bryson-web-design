import {
  TRANSPARENT,
  EMPTY_NEU_SHADOW,
} from './constants';
import {
  clampMax,
  clampMin,
} from './number';
import { resolveHsl } from './resolveHsl';
import { resolveNeuShadow } from './resolveNeuShadow';
import {
  TNeuBoxConfig,
  TNeuStyleReturn,
  TNeuColor,
  THslKey,
} from './types';

export const resolveNeuRules = ({
  size,
  blur,
  hue,
  saturation,
  lightness,
}: TNeuBoxConfig): TNeuStyleReturn => {
  const hsl: Record<THslKey, number> = {
    hue,
    saturation,
    lightness,
  };
  const base = resolveHsl(hsl);
  const spread = size * blur;
  const contrast = {
    fill: clampMin(
      0,
      lightness - spread,
    ),
    back: clampMax(
      100,
      lightness + spread,
    ),
  };
  const textLightness = 100 - lightness;
  const color: TNeuColor = {
    fill: resolveHsl({
      ...hsl,
      lightness: contrast.fill,
    }),
    back: resolveHsl({
      ...hsl,
      lightness: contrast.back,
    }),
    text: resolveHsl({
      ...hsl,
      lightness: textLightness,
    }),
    emptyText: {
      color: TRANSPARENT,
      textShadow: EMPTY_NEU_SHADOW,
    },
  };

  const shadow = resolveNeuShadow({
    size,
    color,
    blur,
  });

  return {
    'neu-basic': {
      color: color.text,
      'background-color': base,
    },
    'neu-empty': {
      'background-color': TRANSPARENT,
      color: TRANSPARENT,
    },
    'neu-text': {
      color: color.text,
      'text-shadow': `${shadow.fill}, ${shadow.back}`,
    },
    // emptyText: {
    //   color: color.text,
    //   textShadow: `${shadow.fill}, ${shadow.back}`,
    // },
    'neu-flat-risen': {
      'box-shadow': `${shadow.fill}, ${shadow.back}`,
    },
    'neu-flat-sunken': {
      'box-shadow': `inset ${shadow.fill}, inset ${shadow.back}`,
    },
    'neu-empty-flat-risen': {
      'box-shadow': `${shadow.emptyFill}, ${shadow.emptyBack}`,
    },
    'neu-empty-flat-sunken': {
      'box-shadow': `inset ${shadow.emptyFill}, inset ${shadow.emptyBack}`,
    },
  };
};
