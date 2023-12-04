import { TDimensions } from 'ops/types/media';
import { useMemo } from 'react';

type TConfig = {
  container: TDimensions | null;
  image: TDimensions | null;
};
export const useImageDimensions = ({
  container,
  image,
}: TConfig) => {
  const dimensions = useMemo(() => {
    let imageHeight = 0;
    let imageWidth = 0;

    if (container && image) {
      const rectAspect = container.width / container.height;
      const imageAspect = image.width / image.height;

      if (imageAspect > rectAspect) {
        imageWidth = container.width;
        imageHeight = container.width / imageAspect;
      } else {
        imageWidth = container.height * imageAspect;
        imageHeight = container.height;
      }
      return { width: ~~imageWidth, height: ~~imageHeight };
    } else {
      return null;
    }
  }, [container, image]);

  return dimensions;
};
