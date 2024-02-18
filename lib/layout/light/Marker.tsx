import { TLayoutComponentProps } from '@brysonandrew/app';
import { TGlowHoverGroupProps } from '@brysonandrew/glow';

type TProps = TGlowHoverGroupProps;
export const LightMarker =
  ({ Glow }: TLayoutComponentProps) =>
  ({ classValue, style, ...props }: TProps) =>
    (
      <div>
        <Glow />
      </div>
    );
