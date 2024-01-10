import { EFFECT_ANIMATE_TRANSITION } from '.';
import { MotionValue } from 'framer-motion';
import { TColorRgbKey } from '@uno/theme/colors/types';
import { resolveDropShadow } from '@uno/rules/glow/resolveDropShadow';
import { resolveShadow } from '@uno/rules/glow/resolveShadow';


export type TGlowConfigOptions = {
  text?: number;
  drop?: number;
  color?: TColorRgbKey;
  value?: MotionValue;
};
export type TPartialGlowConfigOptions =
  Partial<TGlowConfigOptions>;
export const resolveGlowProps = ({
  text = 0,
  drop = 0,
  color = 'teal', 
  value,
}: TGlowConfigOptions) => ({
  style: {
    opacity: value ?? 0,
    textShadow: resolveShadow(text, color),
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
