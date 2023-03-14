import { Shell } from "@components/Shell";
import { Space16 } from "@components/spaces/Space16";
import { List } from "./list";
import { useSelectedItem } from "./useSelectedItem";
import { Full } from "./full";
const screenFiles = import.meta.glob(
  "./screens/**/*.{jpg,png}",
);
import { useEffect, useState } from "react";

export const Showcase = () => {
  const [screens, setScreens] = useState<any[] | null>(
    null,
  );

  const handleLoad = async () => {
    const values = Object.values(screenFiles);

    const results = [];

    for await (const resolver of values) {
      const v = await resolver();
      results.push(v);
    }
    setScreens(results);
  };

  useEffect(() => {
    handleLoad();
  }, []);

  const selectedPath = useSelectedItem();
  const isSelectedItem = selectedPath !== null;

  if (!screens) return null;
  const paths = screens.map((v) => v.default);

  return (
    <Shell>
      <List paths={paths} isSelectedItem={isSelectedItem} />
      <Space16 />
      <>
        {isSelectedItem && (
          <Full selectedPath={selectedPath} />
        )}
      </>
    </Shell>
  );
};
