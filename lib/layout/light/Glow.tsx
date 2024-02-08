import { TLayoutComponentProps } from '@brysonandrew/app';
import { TGlowProps } from '@brysonandrew/layout-effects';

type TProps = TGlowProps;
export const LightGlow =
  ({ Glow: _Glow, COLOR }: TLayoutComponentProps) =>
  ({ children, variants, style, ...props }: TProps) =>
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
