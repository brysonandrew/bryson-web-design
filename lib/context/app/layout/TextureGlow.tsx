import {
  TLayoutRecord,
  TBlankProps,
  TAppConfig,
} from '../config/types';

type TProps = Pick<TLayoutRecord, 'Glow' | 'Texture'> &
  Pick<TAppConfig, 'COLOR'>;
export const TextureGlow =
  ({ Glow, Texture, COLOR }: TProps) =>
  ({ classValue, style, children, ...props }: TBlankProps) =>
    (
      <Glow
        box={6}
        color={'currentColor' as any}
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
          ...style,
          color: COLOR.white,
          opacity: 0.6,
        }}
        {...props}
      >
       <>
       <Texture style={{ ...style }} />
        {children}
       </>
      </Glow>
    );
