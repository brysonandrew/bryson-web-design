import { useSelectedItem } from './useSelectedItem';
import { Full } from './full';
import { Space16 } from '@components/spaces/Space16';
import { List } from './list';
import { Shell } from '@components/shell';
import { APP_ITEMS } from '@constants/apps';
import { GAME_ITEMS } from '@constants/games';
import { MUSIC_ITEMS } from '@constants/music';
import { Shell as MainShell } from '@main/Shell';
import { LIBRARIES_ITEMS } from '@constants/libraries';
import { Space4 } from '@components/spaces/Space4';
import { TextXl } from '@components/text/TextXl';
import { WIDTH_CLASS } from '@constants/styles';
import { useStyles } from '@css/useStyles';

export const Showcase = () => {
  useStyles();
  const selectedPath = useSelectedItem();
  const isSelectedItem = selectedPath !== null;

  return (
    <MainShell>
      <Shell>
        <div className={WIDTH_CLASS}>
          <List
            header='Latest projects'
            items={APP_ITEMS}
            selectedPath={selectedPath}
          />
          <Space16 />
          <>
            {isSelectedItem && (
              <Full selectedPath={selectedPath} />
            )}
          </>
        </div>
      </Shell>
    </MainShell>
  );
};
