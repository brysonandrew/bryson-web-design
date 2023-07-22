import styled from '@emotion/styled';
import { HTMLMotionProps, motion } from 'framer-motion';
import { FC, ForwardedRef } from 'react';
import { ImageWithRef } from './ImageWithRef';
import { TMediaRecord } from '@t/media';

const Root = styled.picture``;
const Source = styled.source``;

type TProps = HTMLMotionProps<'img'> & {
  imageRef?: ForwardedRef<HTMLImageElement>;
  mediaRecord: TMediaRecord;
};
export const Picture: FC<TProps> = ({
  mediaRecord,
  imageRef,
  ...props
}) => {
  const src = mediaRecord.png.src;
  const mainImg = {
    src,
    alt: mediaRecord.png.name,
  };
  const imageProps = {
    ...mainImg,
    ...props,
  };

  return (
    <Root>
      <Source
        type='image/webp'
        srcSet={mediaRecord.webp.src}
      />
      <Source type='image/png' srcSet={src} />
      {imageRef ? (
        <ImageWithRef ref={imageRef} {...imageProps} />
      ) : (
        <motion.img {...imageProps} />
      )}
    </Root>
  );
};
