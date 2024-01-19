import { TAppConfig, TBlankProps } from '../config/types';
import {
  Glow,
  TGlowProps,
} from '@brysonandrew/lib/animation/components/filter-animate/Glow';
import {
  Brighten,
  TBrightenProps,
} from '@brysonandrew/lib/animation/components/filter-animate/Brighten';
import { resolveComponent } from '../utils/resolveComponent';
import { Active } from '../layout/Active';
import { TextureGlow } from '../layout/TextureGlow';
import { GlowSecondaryAccent } from '../layout/GlowSecondaryAccent';

type TConfig = TAppConfig;
export const useLayoutRecord = (value: TConfig) => {
  const { Texture, Blank, BORDER_RADIUS, COLOR } = value;
  const style = {
    borderRadius: BORDER_RADIUS.MD,
  };
  const BASE = {
    Texture: resolveComponent<TBlankProps>(style, Texture),
    Blank: resolveComponent<TBlankProps>(style, Blank),
    Glow: resolveComponent<TGlowProps>(style, Glow),
    Brighten: resolveComponent<TBrightenProps>(
      style,
      Brighten,
    ),
  };

  const _GlowSecondaryAccent = GlowSecondaryAccent({
    Glow: BASE.Glow,
    COLOR,
  });

  return {
    ...BASE,
    GlowSecondaryAccent: _GlowSecondaryAccent,
    TextureGlow: TextureGlow({
      Texture: BASE.Texture,
      GlowSecondaryAccent: _GlowSecondaryAccent,
      COLOR,
    }),
    Active: Active({
      Blank: BASE.Blank,
      GlowSecondaryAccent: _GlowSecondaryAccent,
      COLOR,
    }),
  };
};
