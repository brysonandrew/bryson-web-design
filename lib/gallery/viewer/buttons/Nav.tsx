import type { FC } from 'react';
import { isDesktop } from 'react-device-detect';
import {
  LinkFillCenter,
  TLinkFillCenterProps,
} from '@brysonandrew/interactive/LinkFillCenter';
import { useMoveSound } from '@brysonandrew/sounds/useMoveSound';
import { NOOP } from '@brysonandrew/utils-function';
import { useViewer } from '@brysonandrew/gallery-viewer';

type TProps = TLinkFillCenterProps;
export const Nav: FC<TProps> = ({
  to,
  children,
  ...props
}) => {
  const { onMotionBlurStart } = useViewer();
  const handleMoveSound = useMoveSound();

  const handleClick = () => {
    handleMoveSound();
    onMotionBlurStart();
  };

  return (
    <LinkFillCenter
      to={to}
      onClick={isDesktop ? handleClick : NOOP}
      {...props}
    >
      {children}
    </LinkFillCenter>
  );
};
