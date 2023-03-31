import { useState, useEffect } from "react";
import type { TMedia } from "./config";
import { resolveMedia } from "./config";
const screenFiles = import.meta.glob(
  "../../../assets/screens/**/*.png",
);

export const useMediaFromKey = (key: string) => {
  const [mediaItems, setMediaItems] = useState<
    TMedia[] | null
  >(null);

  const handleLoad = async () => {
    const mediaItems = Object.keys(screenFiles).reduce(
      (a: TMedia[], v: string) => {
        if (
          v.includes(`/${key}/`) &&
          !v.includes(`${key}/preview`)
        ) {
          const next = resolveMedia(v);
          a.push(next);
        }
        return a;
      },
      [],
    );
    if (mediaItems.length === 0) return;

    setMediaItems(mediaItems);
  };

  useEffect(() => {
    void handleLoad();
  }, []);

  return mediaItems;
};
