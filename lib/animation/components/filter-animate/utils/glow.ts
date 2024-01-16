import { EFFECT_ANIMATE_TRANSITION } from '.';
import { MotionValue } from 'framer-motion';
import { resolveDropShadow } from '@lib/color/utils/glow/resolveDropShadow';
import { TColorValue } from '@app/colors/types';
import { resolveBoxShadow } from '@lib/color/utils/glow/resolveBoxShadow';
import { TFilterAnimateProps } from '..';
import { resolveVarCss } from '@lib/color/utils/resolveVarCss';

export type TGlowConfigOptions = {
  text?: number;
  box?: number;
  drop?: number;
  color?: TColorValue;
  value?: MotionValue;
};
export type TPartialGlowConfigOptions =
  Partial<TGlowConfigOptions> & TFilterAnimateProps;
export const resolveGlowProps = ({
  text = 0,
  box = 0,
  drop = 0,
  color = resolveVarCss('white'),
  value,
  style,
  ...rest
}: TPartialGlowConfigOptions) => ({
  style: {
    opacity: value ?? 0,
    ...(text > 0
      ? { textShadow: resolveBoxShadow(color, text) }
      : {}),
    ...(box > 0
      ? { boxShadow: resolveBoxShadow(color, box) }
      : {}),
    ...(drop > 0
      ? { filter: resolveDropShadow(color, drop) }
      : {}),
    ...style,
  },
  transition: EFFECT_ANIMATE_TRANSITION,
  ...(value
    ? {}
    : {
        animate: {
          opacity: 0,
        },
        hover: {
          opacity: 1,
        },
      }),
  ...rest,
});
