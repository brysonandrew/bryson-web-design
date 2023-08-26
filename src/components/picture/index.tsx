import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { FC, ForwardedRef } from 'react';
import { ImageWithRef } from './ImageWithRef';
import { TMediaRecord } from '@t/media';
import { TMotionImgProps } from '@t/dom';

const Root = styled.picture``;
const Source = styled.source``;
// type TProps = HTMLMotionProps<'img'> & TImageDimensionsConfig & TClassValueProps & TMediaRecord;

type TProps = TMotionImgProps & {
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

  // console.log(imageProps);

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
