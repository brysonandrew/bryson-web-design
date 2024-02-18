import { TLayoutComponentProps } from '@brysonandrew/app';
import { TGlowHoverGroupProps } from '@brysonandrew/glow';

type TProps = TGlowHoverGroupProps;
export const LightBack =
  ({
    Glow,
    BackFill,
    BORDER_RADIUS,
  }: TLayoutComponentProps) =>
  ({ children, style, ...rest }: TProps) => {
    const props = {
      style: { borderRadius: BORDER_RADIUS.MD, ...style },
    };
    return (
      <>
        <Glow {...props} {...rest} />
        <BackFill {...props} />
        {children}
      </> 
    );
  };
