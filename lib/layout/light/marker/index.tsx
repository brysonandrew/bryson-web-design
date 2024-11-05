import { TDivProps } from '@brysonandrew/config-types';
import { TGlowC } from '@brysonandrew/layout-light/config/types';
import { markerProps } from '@brysonandrew/layout-light/marker/markerProps';

export const Marker = (GlowFill: TGlowC) => {
  const Fc = (props: TDivProps) => (
    <div {...(markerProps<TDivProps>(props) as TDivProps)}>
      <GlowFill {...props} />
    </div>
  );

  return Fc;
};
