import { TLayoutComponentProps } from '@brysonandrew/app';
import { TGlowProps } from '@brysonandrew/layout-effects';

type TProps = TGlowProps;
export const LightBack =
  ({
    Glow,
    BackFillMotion,
    BORDER_RADIUS,
  }: TLayoutComponentProps) =>
  ({ children, style, ...rest }: TProps) => {
    const props = {
      style: { borderRadius: BORDER_RADIUS.MD, ...style },
    };
    return (
      <>
        <Glow {...props} {...rest}>
          <BackFillMotion {...props} />
        </Glow>
        {children}
      </>
    );
  };
