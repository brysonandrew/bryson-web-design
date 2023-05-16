import { useSelectedItem } from "./useSelectedItem";
import { Full } from "./full";
import { Space16 } from "@components/spaces/Space16";
import { List } from "./list";
import { Shell } from "@components/Shell";
import { APP_ITEMS } from "@constants/apps";
import { GAME_ITEMS } from "@constants/games";
import { MUSIC_ITEMS } from "@constants/music";
import { Shell as MainShell } from "@main/Shell";
import { LIBRARIES_ITEMS } from "@constants/libraries";
import { useStyles } from "@styles/useStyles";
import { Space4 } from "@components/spaces/Space4";

export const Showcase = () => {
  useStyles();
  const selectedPath = useSelectedItem();
  const isSelectedItem = selectedPath !== null;

  return (
    <MainShell>
      <Shell>
        <List
          header="Apps"
          color="red"
          items={APP_ITEMS}
          selectedPath={selectedPath}
        />
        <Space4 />
        <List
          header="Games"
          color="green"
          items={GAME_ITEMS}
          selectedPath={selectedPath}
        />
        <Space4 />
        <List
          header="Libraries"
          color="blue"
          items={LIBRARIES_ITEMS}
          selectedPath={selectedPath}
        />
        <Space4 />
        <List
          header="Music"
          color="purple"
          items={MUSIC_ITEMS}
          selectedPath={selectedPath}
        />
        <Space16 />
        <>
          {isSelectedItem && (
            <Full selectedPath={selectedPath} />
          )}
        </>
      </Shell>
    </MainShell>
  );
};
