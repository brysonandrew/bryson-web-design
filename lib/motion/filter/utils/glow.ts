import { MotionValue } from 'framer-motion';
import { formatFilterDropShadow } from '@brysonandrew/css-format/filter/drop-shadow';
import { formatShadow } from '@brysonandrew/css-format/shadow';
import { TFilterAnimateProps } from '..';
import { TColorValue } from '@brysonandrew/color';

export type TGlowConfigOptions<T extends TColorValue = TColorValue> = {
  text: number;
  box: number;
  drop: number;
  color: T;
  value: MotionValue;
  idle: number;
  isBackground: boolean
};
export type TPartialGlowConfigOptions<T extends TColorValue = TColorValue> =
  Partial<TGlowConfigOptions<T>>;
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
        ? { textShadow: formatShadow(color, text) }
        : {}),
      ...(box > 0
        ? { boxShadow: formatShadow(color, box) }
        : {}),
      ...(drop > 0
        ? { filter: formatFilterDropShadow(color, drop) }
        : {}),
      ...style,
    },
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
