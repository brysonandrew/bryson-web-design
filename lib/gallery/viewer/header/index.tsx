import { type FC } from 'react';
import styled from '@emotion/styled';
import { Content } from '../../components/content';
import {
  TChildrenProps,
  TDivMotionProps,
} from 'lib/types/dom';
import { TSlugProps } from 'lib/gallery/config/types';
import { RightHeader } from '../../../../src/components/galllery/viewer/RightHeader';
import { useGallery } from 'lib/gallery/context/useGallery';
import { NOOP } from 'lib/constants/functions';
import { isDesktop } from 'react-device-detect';
import { Close } from '../buttons/Close';
import { useOffSound } from 'lib/hooks/sounds/useOffSound';

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
