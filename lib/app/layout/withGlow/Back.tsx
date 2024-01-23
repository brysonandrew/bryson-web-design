import { TGlowProps } from '@brysonandrew/filter-animate';
import { TLayoutComponentProps } from '@brysonandrew/app';

type TProps = TLayoutComponentProps;
export const Back =
  ({ Glow, Back: _Back }: TProps) =>
  ({ children, style, ...props }: TGlowProps) =>
    (
      <Glow {...props}>
        <>
          <_Back />
          {children}
        </>
      </Glow>
    );
