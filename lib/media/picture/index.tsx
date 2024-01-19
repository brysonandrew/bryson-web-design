import styled from '@emotion/styled';
import clsx from 'clsx';
import { FC, MutableRefObject } from 'react';
import { motion } from 'framer-motion';
import { TClassValueProps, TImgMotionProps, TSource } from '@brysonandrew/base/types/dom';
import { TMediaRecord } from '@brysonandrew/media/picture/config/types';

const Root = styled.picture``;
const Source = styled.source``;
const Img = styled(motion.img)``;

type TProps = TImgMotionProps &
  TClassValueProps & {
    mediaRecord: TMediaRecord;
    imageRef?: MutableRefObject<HTMLImageElement | null>;
  };

export const Picture: FC<TProps> = ({
  mediaRecord: { src, sources, alt },
  classValue,
  width,
  height,
  imageRef,
  ...imageProps
}) => {
  return (
    <>
      <Root>
        {sources.map((sourceProps: TSource) => (
          <Source
            key={sourceProps.srcSet}
            {...sourceProps}
            srcSet={`/${sourceProps.srcSet}`}
          />
        ))}
        <Img
          ref={imageRef}
          className={clsx(classValue)}
          src={src}
          alt={alt}
          width={width}
          height={height}
          {...imageProps}
        />
      </Root>
    </>
  );
};
