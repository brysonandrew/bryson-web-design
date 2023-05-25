import { useState, useEffect } from "react";
import type { TMedia } from "./config";
import { resolveMedia } from "./config";
import type { TModule } from "@t/index";
const screenFiles = import.meta.glob("/screens/**/+([0-9]|!(*[a-z]*)[0-9]).png");

export const useMediaFromKey = (key: string) => {
  const [mediaItems, setMediaItems] = useState<
    TMedia[] | null
  >(null);

  const handleLoad = async () => {
    const mediaItems: TMedia[] = [];
    for await (const entry of Object.entries(screenFiles)) {
      const [k, resolver] = entry;
      if (
        k.includes(`/${key}/`) &&
        !k.includes(`${key}/preview`)
      ) {
        const m = await resolver();
        const next = resolveMedia(k);
        mediaItems.push({
          ...next,
          src: (m as TModule).default,
        });
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
