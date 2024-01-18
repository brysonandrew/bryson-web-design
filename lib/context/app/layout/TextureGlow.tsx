import {
  TLayoutRecord,
  TAppConfig,
  TBlankProps,
} from '../config/types';

type TProps = Pick<
  TLayoutRecord,
  'GlowSecondaryAccent' | 'Texture'
> &
  Pick<TAppConfig, 'COLOR'>;
export const TextureGlow =
  ({ GlowSecondaryAccent, Texture }: TProps) =>
  ({ children, style, ...props }: TBlankProps) =>
    (
      <GlowSecondaryAccent>
        <>
          <Texture {...props} />
          {children}
        </>
      </GlowSecondaryAccent>
    );
