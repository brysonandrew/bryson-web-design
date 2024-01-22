import {
  Glow as _Glow,
  TGlowProps,
} from '@brysonandrew/filter-animate/Glow';
import { TDefaultStyle } from '@brysonandrew/app';

type TProps = Pick<TDefaultStyle, 'COLOR'>;
export const Glow =
  ({ COLOR }: TProps) =>
  ({ style, children, ...props }: TGlowProps) =>
    (
      <_Glow
        box={6}
        variants={{
          animate: {
            color: COLOR.secondary,
            opacity: 0.6,
          },
          hover: {
            color: COLOR.accent,
            opacity: 1,
          },
        }}
        style={{
          color: COLOR.secondary,
          opacity: 0.6,
          ...style,
        }}
        {...props}
      >
        {children}
      </_Glow>
    );
