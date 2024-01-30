import { type FC } from 'react';
import styled from '@emotion/styled';
import {
  TChildrenProps,
  TDivMotionProps,
} from '@brysonandrew/types/dom';
import { TSlugProps } from '@brysonandrew/gallery/config/types';
import { NOOP } from '@brysonandrew/utils/functions';
import { isDesktop } from 'react-device-detect';
import { Close } from '../../buttons/Close';
import { useOffSound } from '@brysonandrew/sounds/useOffSound';
import { Content } from '@brysonandrew/gallery';
import { useGallery } from '@brysonandrew/gallery/GalleryProvider';
import { useApp } from '@brysonandrew/app';

const Root = styled.header``;

type TProps = TDivMotionProps &
  TSlugProps &
  Partial<TChildrenProps>;
export const ViewerHeader: FC<TProps> = ({
  slug,
  ...props
}) => {
  const {
    Viewer: { RightHeader },
  } = useGallery();
  const { sounds } = useApp();

  const handleClose = () => {
    if (sounds?.off) {
      sounds.off();
    }
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
