import type { FC } from 'react';
import {
  IconLink,
  TProps as TIconLinkProps,
} from '@lib/components/interactive/IconLink';
import {
  TClassValueProps,
  TTitleProps,
} from '@lib/types/dom';
import { useMoveSound } from '@lib/hooks/sounds/useMoveSound';
import { useViewer as useContext } from '@lib/gallery/viewer/context/useViewer';
import { NOOP } from '@lib/constants/functions';
import { isDesktop } from 'react-device-detect';

type TProps = TClassValueProps &
  Pick<TIconLinkProps, 'Icon' | 'to'> &
  TTitleProps;
export const Nav: FC<TProps> = ({ to, Icon, ...props }) => {
  const { onMotionBlurStart } = useContext();
  const handleMoveSound = useMoveSound();

  const handleClick = () => {
    handleMoveSound();
    onMotionBlurStart();
  };

  return (
    <IconLink
      to={to}
      onClick={isDesktop ? handleClick : NOOP}
      Icon={Icon}
      {...props}
    />
  );
};
