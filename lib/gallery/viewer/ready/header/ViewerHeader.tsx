import { type FC } from 'react';
import {
  TChildrenProps,
  TDivMotionProps,
} from '@brysonandrew/config-types/dom';
import { TSlugProps } from '@brysonandrew/gallery/config/types';
import { NOOP } from '@brysonandrew/utils-function';
import { isDesktop } from 'react-device-detect';
import { Close, Content } from '@brysonandrew/gallery';
import { useGallery } from '@brysonandrew/gallery/GalleryProvider';
import { useApp } from '@brysonandrew/app';
import { PRESENCE_OPACITY_DURATION_DELAY } from '@brysonandrew/motion-config-constants';

type TProps = TDivMotionProps &
  TSlugProps &
  Partial<TChildrenProps>;
export const ViewerHeader: FC<TProps> = ({
  slug,
  ...props
}) => {
  const { Viewer } = useGallery();
  const { sounds, BackMotionFill, GLOW_BOX } = useApp();

  const handleClose = () => {
    if (sounds?.off) {
      sounds.off();
    }
  };
  return (
    <header className="relative left-0 top-0 row w-full z-30">
      <BackMotionFill
        style={{ boxShadow: GLOW_BOX['white'] }}
      />
      <Content
        isHover
        slug={slug}
        leftHeader={<Viewer.LeftHeader slug={slug} />}
        rightHeader={
          <>
            <Viewer.RightHeader slug={slug} />
            <Close
              onClick={isDesktop ? handleClose : NOOP}
              {...PRESENCE_OPACITY_DURATION_DELAY}
            />
          </>
        }
        {...props}
      />
    </header>
  );
};
