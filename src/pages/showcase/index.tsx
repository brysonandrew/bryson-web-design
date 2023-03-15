import { Shell } from "@components/Shell";
import { Space16 } from "@components/spaces/Space16";
import { List } from "./list";
import { useSelectedItem } from "./useSelectedItem";
import { Full } from "./full";
const screenFiles = import.meta.glob(
  "./screens/**/*.{jpg,png}",
);
import { useEffect, useState } from "react";
import {
  TMedia,
  TMediaRecord,
  resolveMedia,
} from "./config";
import { TModule } from "@t/index";

export const Showcase = () => {
  const [mediaRecord, setMediaRecord] =
    useState<TMediaRecord | null>(null);

  const handleLoad = async () => {
    const values = Object.values(screenFiles);

    const mediaRecord: TMediaRecord = {};

    for await (const resolver of values) {
      const v = (await resolver()) as TModule;

      const media = resolveMedia(v.default);

      mediaRecord[media.name] = [...(mediaRecord[media.name] ?? []), media];
    }
    setMediaRecord(mediaRecord);
  };

  useEffect(() => {
    handleLoad();
  }, []);


  const selectedPath = useSelectedItem();
  const isSelectedItem = selectedPath !== null;

  if (!mediaRecord) return null;

  console.log(mediaRecord);
  const keys = Object.keys(mediaRecord)

  return (
    <Shell>
      <List
        keys={keys}
        isSelectedItem={isSelectedItem}
      />
      <Space16 />
      <>
        {isSelectedItem && (
          <Full
            mediaRecord={mediaRecord}
            selectedPath={selectedPath}
          />
        )}
      </>
    </Shell>
  );
};
