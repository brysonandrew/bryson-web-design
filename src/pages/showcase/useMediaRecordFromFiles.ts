import type { TModule } from "@t/index";
import { useState, useEffect } from "react";
import type { TMediaRecord } from "./config";
import { resolveMedia, EXCLUDED_KEYS } from "./config";
const screenFiles = import.meta.glob("/src/screens/**/*.png");

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
