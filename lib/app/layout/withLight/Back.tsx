import { TGlowProps } from '@brysonandrew/filter-animate';
import { TLayoutComponentProps } from '@brysonandrew/app';

type TProps = TLayoutComponentProps;
export const Back =
  ({ Glow, Back: _Back, BORDER_RADIUS }: TProps) =>
  ({ children, style, ...rest }: TGlowProps) => {
    const props = {
      style: { borderRadius: BORDER_RADIUS.MD, ...style },
      ...rest,
    };
    return (
      <>
        <Glow {...props}>
          <_Back {...props} />
        </Glow>
        {children}
      </>
    );
  };
