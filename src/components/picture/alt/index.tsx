export const hey = 'ho';
// import styled from '@emotion/styled';
// import { FC, Fragment, HTMLAttributes, useRef } from 'react';
// import { TMediaRecord, TSource } from 'ops/types/media';
// import { resolveAspectRatio } from '@utils/resolveAspectRatio';
// import { useContext } from '@context/domains/gallery/Context';
// import { useLoadImage } from '@hooks/useLoadImage';
// import { HTMLMotionProps, TargetAndTransition, motion } from 'framer-motion';
// import { TImageDimensionsConfig, useImageDimensions } from '@hooks/layout/useImageDimensions';
// import { Responsive as Placeholder } from '@components/placeholder/Responsive';
// import { Y_SHOW_VALUE } from '@components/image/Slide';
// import { TClassValueProps } from '@t/index';
// import clsx from 'clsx';

// const Root = styled.picture``;
// const Source = styled.source``;
// const Image = styled(motion.img)``;

// type TProps = HTMLMotionProps<'img'> & TImageDimensionsConfig & TClassValueProps & TMediaRecord;
// export const Picture: FC<TProps> = ({
//   src,
//   sources,
//   alt,
//   isCover,
//   box,
//   classValue,
//   ...imageProps
// }) => {
//   const { imageAspectRatioRecord, imageShownRecord, dispatch } = useContext();
//   const ref = useRef<HTMLImageElement | null>(null);
//   const imageAspectRatio = imageAspectRatioRecord[src];
//   const isLoaded = typeof imageAspectRatio !== 'undefined';

//   const image = ref.current;

//   const dimensions = useImageDimensions({
//     imageAspectRatio,
//     box,
//     isCover,
//   });
//   const isDimensions = dimensions !== null;

//   const handleLoad = (image: HTMLImageElement) => {
//     const imageAspectRatio = resolveAspectRatio(image);
//     dispatch({ type: 'image-aspect-ratio-record', value: { [src]: imageAspectRatio } });
//   };
//   useLoadImage({ src, isLoaded, onLoad: handleLoad, image });
//   const isAlreadyShown = Boolean(imageShownRecord[src]);

//   const handleAnimationComplete = ({ y }: TargetAndTransition) => {
//     if (!isAlreadyShown && y === Y_SHOW_VALUE) {
//       dispatch({ type: 'image-shown', value: src });
//     }
//   };

//   return (
//     <>
//       {!isLoaded && <Placeholder />}
//       <Root>
//         {sources.map((sourceProps: TSource) => (
//           <Source key={sourceProps.srcSet} {...sourceProps} />
//         ))}
//         <Image
//           ref={ref}
//           className={clsx(classValue)}
//           onAnimationComplete={handleAnimationComplete}
//           src={src}
//           alt={alt}
//           {...imageProps}
//           {...(isDimensions ? dimensions : {})}
//         />
//       </Root>
//     </>
//   );
// };
