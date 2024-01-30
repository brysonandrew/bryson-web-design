import { TGlowProps } from '@brysonandrew/filter-animate';
import { TLayoutComponentProps } from '@brysonandrew/app';

type TProps = TLayoutComponentProps;
export const Back =
  ({ Glow, Back: _Back }: TProps) =>
  ({ children, ...props }: TGlowProps) =>
    (
      <Glow {...props}>
        <>
          <_Back {...props} />
          {children}
        </>
      </Glow>
    );
