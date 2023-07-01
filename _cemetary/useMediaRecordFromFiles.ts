import type { TModule } from "@t/index";
import { useState, useEffect } from "react";
import type { TMediaRecord } from "../src/pages/showcase/config";
import { resolveMedia, EXCLUDED_KEYS } from "../src/pages/showcase/config";
const screenFiles = import.meta.glob("/screens/**/+([0-9]|!(*[a-z]*)[0-9]).png");

export const useMediaRecordFromFiles = () => {
  const [mediaRecord, setMediaRecord] =
    useState<TMediaRecord | null>(null);

  const handleLoad = async () => {
    const values = Object.values(screenFiles);

    const mediaRecord: TMediaRecord = {};

    for await (const resolver of values) {
      const value = await resolver();

      const media = resolveMedia(
        (value as TModule).default,
      ); 

      if (!EXCLUDED_KEYS.includes(media.img)) {
        mediaRecord[media.name] = [
          ...(mediaRecord[media.name] ?? []),
          media,
        ];
      }
    }
    setMediaRecord(mediaRecord);
  };

  useEffect(() => {
    void handleLoad();
  }, []);

  return mediaRecord;
};
