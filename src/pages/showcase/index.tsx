import { useSelectedItem } from "./useSelectedItem";
import { Full } from "./full";
import { Space16 } from "@components/spaces/Space16";
import { List } from "./list";
import { Shell } from "@components/Shell";

export const Showcase = () => {
  const selectedPath = useSelectedItem();
  const isSelectedItem = selectedPath !== null;

  return (
    <Shell>
      <List selectedPath={selectedPath} />
      <Space16 />
      <>
        {isSelectedItem && (
          <Full selectedPath={selectedPath} />
        )}
      </>
    </Shell>
  );
}; 
 