import { TGlowProps } from '@brysonandrew/filter-animate/Glow';
import { TDefaultStyle } from '@brysonandrew/app';
import { TLayoutRecord } from '../hooks/layout/types';

type TProps = Pick<TLayoutRecord, 'Glow'> &
  Pick<TDefaultStyle, 'COLOR'>;
export const GlowSecondaryAccent =
  ({ Glow, COLOR }: TProps) =>
  ({ style, children, ...props }: TGlowProps) =>
    (
      <Glow
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
      </Glow>
    );
