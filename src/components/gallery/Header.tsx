import { type FC } from 'react';
import { Close } from './buttons/Close';
import styled from '@emotion/styled';
import { Content } from '../../pages/projects/list/item/content';
import { TDivMotionProps } from '@t/dom';
import { TChildrenProps } from '@t/index';
import { useOffSound } from '@hooks/sounds/useOffSound';
import { NOOP } from '@constants/functions';
import { isDesktop } from 'react-device-detect';
import { Network } from '@components/network';
import { TSlugProps } from '@pages/projects/config';

const Root = styled.header``;

type TProps = TDivMotionProps &
  TSlugProps &
  Partial<TChildrenProps>;
export const Header: FC<TProps> = ({ slug, ...props }) => {
  const handleOffSound = useOffSound();
  const handleClose = () => {
    handleOffSound();
  };
  return (
    <Root className='relative left-0 top-0 row w-full z-30'>
      <Content 
        isHover
        slug={slug}
        rightHeader={
          <Close onClick={isDesktop ? handleClose : NOOP} />
        }
        {...props}
      />
      <div className='absolute top-full left-0 translate-y-4'>
        <Network />
      </div>
    </Root>
  );
};
