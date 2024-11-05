import styled from '@emotion/styled';
import { cx } from 'class-variance-authority';
import { FC, MutableRefObject } from 'react';
import { motion } from 'framer-motion';
import {
  TClassValueProps,
  TImgMotionProps,
  TSource,
} from '@brysonandrew/config-types/dom';
import { TMediaRecord } from '@brysonandrew/media';

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
    <picture>
      {sources.map((sourceProps: TSource) => (
        <source
          key={sourceProps.srcSet}
          {...sourceProps}
          srcSet={`/${sourceProps.srcSet}`}
        />
      ))}
      <motion.img
        ref={imageRef}
        className={cx(classValue)}
        src={src}
        alt={alt}
        width={width}
        height={height}
        {...imageProps}
      />
    </picture>
  );
};
