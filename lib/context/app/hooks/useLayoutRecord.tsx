import { TAppConfig, TBlankProps } from '../config/types';
import {
  Glow,
  TGlowProps,
} from '@lib/animation/components/filter-animate/Glow';
import {
  Brighten,
  TBrightenProps,
} from '@lib/animation/components/filter-animate/Brighten';
import { resolveComponent } from '../utils/resolveComponent';
import { Active } from '../layout/Active';
import { TextureGlow } from '../layout/TextureGlow';

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

  return {
    ...BASE,
    TextureGlow: TextureGlow({
      Glow: BASE.Glow,
      Texture: BASE.Texture,
      COLOR,
    }),
    Active: Active({ Blank: BASE.Blank, COLOR }),
  };
};
