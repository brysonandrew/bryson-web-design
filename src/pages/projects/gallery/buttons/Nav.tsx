import type { FC } from 'react';
import {
  IconLink,
  TProps as TIconLinkProps,
} from '../../../../components/interactive/IconLink';
import { TClassValueProps, TTitleProps } from '@t/index';
import { useMoveSound } from '@hooks/sounds/useMoveSound';
import { useGallery as useContext } from '@pages/projects/gallery/context';
import { NOOP } from '@constants/functions';
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
