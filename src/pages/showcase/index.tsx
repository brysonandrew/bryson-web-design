import { Shell } from "@components/Shell";
import { Space16 } from "@components/spaces/Space16";
import { List } from "./list";
import { useSelectedItem } from "./useSelectedItem";
import { Full } from "./full";

export const Showcase = () => {
  const selectedPath = useSelectedItem();
  const isSelectedItem = selectedPath !== null;

  return (
    <Shell>
      <List
        isSelectedItem={isSelectedItem}
      />
      <Space16 />
      <>
        {isSelectedItem && (
          <Full selectedPath={selectedPath} />
        )}
      </>
    </Shell>
  );
};
