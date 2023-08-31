import styled from '@emotion/styled';
import clsx from 'clsx';
import { FC, MutableRefObject } from 'react';
import { motion } from 'framer-motion';
import { TClassValueProps } from '@t/index';
import { TMotionImgProps, TSource } from '@t/dom';
import { TMediaRecord } from '@ops/screens/types/media';

const Root = styled.picture``;
const Source = styled.source``;
const Img = styled(motion.img)``;

type TProps = TMotionImgProps &
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
