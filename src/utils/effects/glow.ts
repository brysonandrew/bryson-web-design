import { resolveColor, resolveWhite } from '@utils/colors';
import {
  EFFECT_ANIMATE_TRANSITION,
  EFFECT_HOVER_TRANSITION,
  PARENT_PROPS,
} from '.';
import { TColorRgbKey } from '@t/colors';

export const resolveDropShadow = (
  spread: number,
  color: TColorRgbKey = 'white',
) =>
  `drop-shadow(0px 0px ${spread}px ${resolveColor(
    color,
    0.8,
  )})`;
export const resolveShadow = (
  spread: number,
  color: TColorRgbKey = 'white',
) =>
  `0px 0px ${spread}px ${resolveWhite(
    0.5,
  )}, 0px 0px ${spread}px ${resolveColor(color, 0.8)}`;

export const PARENT_GLOW_PROPS = PARENT_PROPS;

export type TGlowConfigOptions = {
  text?: number;
  drop?: number;
  color?: TColorRgbKey;
};
export type TPartialGlowConfigOptions =
  Partial<TGlowConfigOptions>;
export const resolveGlowProps = ({
  text = 0,
  drop = 0,
  color = 'teal',
}: TGlowConfigOptions) => ({
  style: {
    opacity: 0,
    textShadow: resolveShadow(text, color),
    filter: resolveDropShadow(drop, color),
  },
  variants: {
    animate: {
      opacity: 0,
      transition: EFFECT_ANIMATE_TRANSITION,
    },
    hover: {
      opacity: 1,
      transition: EFFECT_HOVER_TRANSITION,
    },
  },
});
