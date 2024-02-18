import clsx from 'clsx';
import { TPartialGlowConfigOptions } from '@brysonandrew/filter-animate';
import {
  resolveBoxShadow,
  resolveDropShadow,
} from '@brysonandrew/color';

export type TGlowHoverGroupProps =
  TPartialGlowConfigOptions & {
    idleStyle: any;
    hoverStyle: any;
  };
export const resolveGlowHoverGroup = ({
  text = 0,
  box = 0,
  drop = 0,
  color = 'currentColor',
  idle,
  value,
  idleStyle,
  hoverStyle,
  ...props
}: TGlowHoverGroupProps) => {
  const commonStyle = {
    ...(text > 0
      ? { textShadow: resolveBoxShadow(color, text) }
      : {}),
    ...(box > 0
      ? { boxShadow: resolveBoxShadow(color, box) }
      : {}),
    ...(drop > 0
      ? { filter: resolveDropShadow(color, drop) }
      : {}),
  };
  const commonProps = {
    ...props,
  };
  return {
    idle: {
   
      ...commonProps,
    },
    hover: {
      className: clsx(
        'fill opacity-group-hover',
        // classValue,
      ),
      style: { ...commonStyle, ...hoverStyle },
      ...commonProps,
    },
  };
};
