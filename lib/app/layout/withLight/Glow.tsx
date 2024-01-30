import { TGlowProps } from '@brysonandrew/filter-animate';
import { TLayoutComponentProps } from '@brysonandrew/app';

type TProps = TLayoutComponentProps;
export const Glow =
  ({ Glow: _Glow, COLOR }: TProps) =>
  ({ children, variants, style, ...props }: TGlowProps) =>
    (
      <_Glow
        box={6}
        variants={{
          idle: {
            color: COLOR.secondary,
            opacity: 0.6,
          },
          hover: {
            color: COLOR.accent,
            opacity: 1,
          },
          ...variants,
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
