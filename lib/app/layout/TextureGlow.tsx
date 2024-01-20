import { TDefaultStyle } from '../config/types';
import {
  TLayoutRecord,
  TBlankProps,
} from '../hooks/layout/types';

type TProps = Pick<
  TLayoutRecord,
  'GlowSecondaryAccent' | 'Texture'
> &
  Pick<TDefaultStyle, 'COLOR'>;
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
