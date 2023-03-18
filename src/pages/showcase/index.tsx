import { useEffect, useState } from "react";
import { TModule } from "@t/index";
import { useSelectedItem } from "./useSelectedItem";
import { Full } from "./full";
const screenFiles = import.meta.glob(
  "../../../assets/screens/**/*.{jpg,png}",
);
import { TMediaRecord, resolveMedia } from "./config";

export const Showcase = () => {
  const [mediaRecord, setMediaRecord] =
    useState<TMediaRecord | null>(null);

  const handleLoad = async () => {
    const values = Object.values(screenFiles);

    const mediaRecord: TMediaRecord = {};

    for await (const resolver of values) {
      const v = (await resolver()) as TModule;

      const media = resolveMedia(v.default);

      mediaRecord[media.name] = [
        ...(mediaRecord[media.name] ?? []),
        media,
      ];
    }
    setMediaRecord(mediaRecord);
  };

  useEffect(() => {
    void handleLoad();
  }, []);

  const selectedPath = useSelectedItem();
  const isSelectedItem = selectedPath !== null;

  if (!mediaRecord) return null;

  const keys = Object.keys(mediaRecord);

  return (
    <>
      {/* <List keys={keys} isSelectedItem={isSelectedItem} />
      <Space16 /> */}
      <>
        {isSelectedItem && (
          <Full
            mediaRecord={mediaRecord}
            selectedPath={selectedPath}
          />
        )}
      </>
    </>
  );
};
