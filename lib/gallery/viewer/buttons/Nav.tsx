import type { FC } from 'react';
import { isDesktop } from 'react-device-detect';
import {
  LinkFillCenter,
  TProps as TIconLinkProps,
} from '@brysonandrew/lib/components/interactive/LinkFillCenter';
import { useMoveSound } from '@brysonandrew/lib/hooks/sounds/useMoveSound';
import { useViewer as useContext } from '@brysonandrew/lib/gallery/viewer/context/useViewer';
import { NOOP } from '@brysonandrew/lib/constants/functions';

type TProps = TIconLinkProps;
export const Nav: FC<TProps> = ({
  to,
  children,
  ...props
}) => {
  const { onMotionBlurStart } = useContext();
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
