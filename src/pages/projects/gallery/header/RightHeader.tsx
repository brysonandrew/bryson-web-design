import type { FC } from 'react';
import { TItem } from '@pages/projects/config/types';
import { NOOP } from '@lib/constants/functions';
import { isDesktop } from 'react-device-detect';
import { Close } from '../buttons/Close';
import { useOffSound } from '@lib/hooks/sounds/useOffSound';

type TProps = Pick<TItem, 'pricing'>;
export const RightHeader: FC<TProps> = ({ pricing }) => {
  const handleOffSound = useOffSound();
  const handleClose = () => {
    handleOffSound();
  };
  return <Close onClick={isDesktop ? handleClose : NOOP} />;
};
