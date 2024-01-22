import { TGlowProps } from '@brysonandrew/filter-animate';
import { TLayoutComponentProps } from '../types';

type TProps = TLayoutComponentProps;
export const Glow =
  ({ Glow: _Glow, Back: _Back, COLOR }: TProps) =>
  ({ children, style, ...props }: TGlowProps) =>
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
