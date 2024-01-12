import type { FC } from 'react';
import { P1 } from '@components/layout/space/P1';
import { P2 } from '@components/layout/space/P2';
import { TItem } from '@pages/projects/config/types';
import { NOOP } from '@constants/functions';
import { isDesktop } from 'react-device-detect';
import { Pricing } from '../list/item/content/Pricing';
import { Close } from './buttons/Close';
import { useOffSound } from '@hooks/sounds/useOffSound';
import { P4 } from '@components/layout/space/P4';

type TProps = Pick<TItem, 'pricing'>;
export const RightHeader: FC<TProps> = ({ pricing }) => {
  const handleOffSound = useOffSound();
  const handleClose = () => {
    handleOffSound();
  };
  return (
    <>
      <P2 />
      <Pricing type={pricing} />
      <P2 />
      <Close onClick={isDesktop ? handleClose : NOOP} />
    </>
  );
};
