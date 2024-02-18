import { TLayoutComponentProps } from '@brysonandrew/app';
import { resolveBoxShadow } from '@brysonandrew/color';
import { TGlowHoverGroupProps } from '@brysonandrew/glow';

type TProps = TGlowHoverGroupProps;
export const resolveGlowStyle =
  ({ COLOR, BORDER_RADIUS }: TLayoutComponentProps) =>
  ({
    style,
    idleStyle,
    hoverStyle,
  }: TProps) => ({
    style: {

      ...style,
    },
    idleStyle: {

      ...idleStyle,
    },
    hoverStyle: {

      ...hoverStyle,
    },
  });
