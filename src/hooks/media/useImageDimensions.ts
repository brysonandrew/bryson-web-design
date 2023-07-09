import { useMemo } from "react";
import { useWindowSize } from "@hooks/useWindowSize";
import { TDimensions } from "@t/layout";

type TConfig = { container: TDimensions | null, image: TDimensions | null; };
export const useImageDimensions = ({ container, image }: TConfig) => {
  const { isResizing } = useWindowSize();

  const dimensions = useMemo(() => {
    let imageHeight = 0;
    let imageWidth = 0;

    if (container && image && !isResizing) {
      const rectAspect = container.width / container.height;
      const imageAspect =
        image.width / image.height;

      if (imageAspect > rectAspect) {
        imageWidth = container.width;
        imageHeight = container.width / imageAspect;
      } else {
        imageWidth = container.width * imageAspect;
        imageHeight = container.height;
      }
    }
    return { width: imageWidth, height: imageHeight };
  }, [container, image, isResizing]);

  return dimensions;
};