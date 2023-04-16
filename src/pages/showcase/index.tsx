import { useSelectedItem } from "./useSelectedItem";
import { Full } from "./full";
import { Space16 } from "@components/spaces/Space16";
import { List } from "./list";
import { Shell } from "@components/Shell";
import { APP_ITEMS } from "@constants/apps";
import { Space } from "@components/spaces/Space";
import { GAME_ITEMS } from "@constants/games";
import { MUSIC_ITEMS } from "@constants/music";

import { LIBRARIES_ITEMS } from "@constants/libraries";
import { useStyles } from "@styles/useStyles";

export const Showcase = () => {
  useStyles();
  const selectedPath = useSelectedItem();
  const isSelectedItem = selectedPath !== null;

  return (
    <Shell>
      <List
        header="Apps"
        items={APP_ITEMS}
        selectedPath={selectedPath}
      />
      <Space />
      <List
        header="Games"
        items={GAME_ITEMS}
        selectedPath={selectedPath}
      />
      <Space />
      <List
        header="Libraries"
        items={LIBRARIES_ITEMS}
        selectedPath={selectedPath}
      />
      <Space />
      <List
        header="Music"
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
  );
};
