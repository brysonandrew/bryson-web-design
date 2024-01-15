import { EFFECT_ANIMATE_TRANSITION } from '.';
import { MotionValue } from 'framer-motion';
import { TColorRgbKey } from '@lib/color/types';
import { resolveDropShadow } from '@uno/rules/glow/resolveDropShadow';
import { resolveShadowLg } from '@uno/rules/glow/resolveShadowLg';
import { TColorKey } from '@app/colors/types';

export type TGlowConfigOptions = {
  text?: number;
  drop?: number;
  color?: TColorRgbKey<TColorKey>;
  value?: MotionValue;
};
export type TPartialGlowConfigOptions =
  Partial<TGlowConfigOptions>;
export const resolveGlowProps = ({
  text = 0,
  drop = 0,
  color = 'secondary',
  value,
}: TGlowConfigOptions) => ({
  style: {
    opacity: value ?? 0,
    textShadow: resolveShadowLg(text, color),
    filter: resolveDropShadow(drop, color),
  },
  transition: EFFECT_ANIMATE_TRANSITION,
  variants: value
    ? {}
    : {
        animate: {
          opacity: 0,
        },
        hover: {
          opacity: 1,
        },
      },
});
