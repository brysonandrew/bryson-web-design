import { useState, useEffect } from "react";
import type { TMedia } from "./config";
import { resolveMedia } from "./config";
const screenFiles = import.meta.glob(
  "/src/screens/**/*.png",
);

export const useMediaFromKey = (key: string) => {
  const [mediaItems, setMediaItems] = useState<
    TMedia[] | null
  >(null);

  const handleLoad = async () => {
    const mediaItems: TMedia[] = [];
    for await (const entry of Object.entries(screenFiles)) {
      const [k, value] = entry;
      if (
        k.includes(`/${key}/`) &&
        !k.includes(`${key}/preview`)
      ) {
        const m: any = await value();
        const next = resolveMedia(k);
        mediaItems.push({ ...next, src: m.default });
      }
    }

    if (mediaItems.length === 0) return;

    setMediaItems(mediaItems);
  };

  useEffect(() => {
    void handleLoad();
  }, []);

  return mediaItems;
};
