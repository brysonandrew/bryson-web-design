import { type FC } from 'react';
import styled from '@emotion/styled';
import { Content } from '../../components/content';
import {
  TChildrenProps,
  TDivMotionProps,
} from '@brysonandrew/base/types/dom';
import { TSlugProps } from '@brysonandrew/gallery/config/types';
import { NOOP } from '@brysonandrew/base/constants/functions';
import { isDesktop } from 'react-device-detect';
import { Close } from '../buttons/Close';
import { useOffSound } from '@brysonandrew/sounds/useOffSound';
import { useGallery } from '../../context/Provider';

const Root = styled.header``;

type TProps = TDivMotionProps &
  TSlugProps &
  Partial<TChildrenProps>;
export const Header: FC<TProps> = ({ slug, ...props }) => {
  const {
    Viewer: { RightHeader },
  } = useGallery();
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
          <>
            <RightHeader slug={slug} />
            <Close
              onClick={isDesktop ? handleClose : NOOP}
            />
          </>
        }
        {...props}
      />
    </Root>
  );
};
