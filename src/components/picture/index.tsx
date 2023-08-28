import styled from '@emotion/styled';
import { FC, MutableRefObject } from 'react';
import { motion } from 'framer-motion';
import { TClassValueProps } from '@t/index';
import clsx from 'clsx';
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
  // const ref = useRef<HTMLImageElement | null>(null);
  // const image = ref.current;

  // const { isLoaded, image, imageRef } = useLoadImage(
  //   mediaRecord.src,
  // );

  // const handleLoad = (image: HTMLImageElement) => {
  //   const imageAspectRatio = resolveAspectRatio(image);
  //   dispatch({
  //     type: 'image-aspect-ratio-record',
  //     value: { [src]: imageAspectRatio },
  //   });
  // };
  // useLoadImage({
  //   src,
  //   isLoaded,
  //   onLoad: handleLoad,
  //   image,
  // });

  // const handleAnimationComplete = ({
  //   y,
  // }: TargetAndTransition) => {
  //   if (!isAlreadyShown && y === Y_SHOW_VALUE) {
  //     dispatch({ type: 'image-shown', value: src });
  //   }
  // };

  return (
    <>
      {/* {!isLoaded && <Placeholder />} */}
      <Root>
        {sources.map((sourceProps: TSource) => (
          <Source
            key={sourceProps.srcSet}
            {...sourceProps}
          />
        ))}
        <Img
          ref={imageRef}
          className={clsx(classValue)}
          // onAnimationComplete={handleAnimationComplete}
          src={src}
          alt={alt}
          width={width}
          height={height}
          {...imageProps}
          // {...(isDimensions ? dimensions : {})}
        />
      </Root>
    </>
  );
};
