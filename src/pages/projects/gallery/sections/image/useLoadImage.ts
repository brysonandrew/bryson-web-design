import { useState, useEffect } from "react";

type TConfig = {
  image: HTMLImageElement | null;
  src?: string;
};
export const useLoadImage = ({ image, src }: TConfig) => {
  const [isLoaded, setLoaded] = useState(false);

  useEffect(() => {
    if (image && src) {
      const handleLoad = () => {
        image.onload = () => {
          setLoaded(true);
        };
        image.src = src;

        setLoaded(false);
      };

      handleLoad();
    }

  }, [image]);

  return isLoaded;
};