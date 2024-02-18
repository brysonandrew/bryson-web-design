import { MotionValue } from 'framer-motion';
import { resolveDropShadow } from '@brysonandrew/color-glow/resolveDropShadow';
import { resolveBoxShadow } from '@brysonandrew/color-glow/resolveBoxShadow';
import { TFilterAnimateProps } from '..';
import { TRANSITION_02_EASEIN_008 } from '@brysonandrew/animation';

export type TGlowConfigOptions = {
  text: number;
  box: number;
  drop: number;
  color: string;
  value: MotionValue;
  idle: number;
};
export type TPartialGlowConfigOptions =
  Partial<TGlowConfigOptions>;
export type TGlowConfig = TPartialGlowConfigOptions &
  TFilterAnimateProps;
export const resolveGlowProps = ({
  text = 0,
  box = 0,
  drop = 0,
  color = 'currentColor',
  idle,
  value,
  style,
  ...rest
}: TGlowConfig) => {
  return {
    style: {
      ...(value ? { opacity: value } : {}),
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
    transition: TRANSITION_02_EASEIN_008,
    ...(value
      ? {}
      : {
          variants: {
            idle: {
              opacity: idle ?? 0,
            },
            hover: {
              opacity: 1,
            },
          },
        }),
    ...rest,
  };
};
