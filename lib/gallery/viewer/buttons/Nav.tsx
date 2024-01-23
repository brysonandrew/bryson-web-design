import type { FC } from 'react';
import { isDesktop } from 'react-device-detect';
import {
  LinkFillCenter,
  TProps as TIconLinkProps,
} from '@brysonandrew/interactive/LinkFillCenter';
import { useMoveSound } from '@brysonandrew/sounds/useMoveSound';
import { NOOP } from '@brysonandrew/utils/functions';
import { useViewer } from '@brysonandrew/viewer';

type TProps = TIconLinkProps;
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
