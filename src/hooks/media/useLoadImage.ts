import { TMediaRecord } from '@t/media';
import { useState, useEffect, useRef } from 'react';

export const useLoadImage = (mediaRecord: TMediaRecord) => {
  const imageRef = useRef<HTMLImageElement | null>(null);
  const image = imageRef.current;

  const src = mediaRecord.png.src;
  const [isLoaded, setLoaded] = useState(false);

  useEffect(() => {
    if (image && src) {
      const handleLoad = () => {
        image.onload = () => {
          setLoaded(true);
        };
        image.src = src;

        setLoaded(true);
      };

      handleLoad();
    }
  }, [image, src]);

  return { image, imageRef, isLoaded, src };
};
