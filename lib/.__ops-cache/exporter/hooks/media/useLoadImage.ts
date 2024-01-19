import { useState, useEffect, useRef } from 'react';

export const useLoadImage = (src?: string) => {
  const imageRef = useRef<HTMLImageElement | null>(null);
  const image = imageRef.current;

  const [isLoaded, setLoaded] = useState(false);

  useEffect(() => {
    if (image && src) {
      const handleLoad = () => {
        image.onload = () => {
          setLoaded(true);
        };
        image.src = src;
      };

      handleLoad();
    }
  }, [image, src]);

  return { image, imageRef, isLoaded, src };
};
