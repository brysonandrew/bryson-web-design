import type { FC } from 'react';
import { P2 } from '@lib/components/layout/space/P2';
import { TItem } from '@pages/projects/config/types';
import { NOOP } from '@lib/constants/functions';
import { isDesktop } from 'react-device-detect';
import { Badge } from '../../../pricing/badge';
import { Close } from '../buttons/Close';
import { useOffSound } from '@lib/hooks/sounds/useOffSound';

type TProps = Pick<TItem, 'pricing'>;
export const RightHeader: FC<TProps> = ({ pricing }) => {
  const handleOffSound = useOffSound();
  const handleClose = () => {
    handleOffSound();
  };
  return (
    <>
      <P2 />
      <Badge type={pricing} isHover />
      <P2 />
      <Close onClick={isDesktop ? handleClose : NOOP} />
    </>
  );
};
