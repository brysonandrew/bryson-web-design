import { Full } from './full';
import { List } from './list';
import { Width } from '@components/Width';
import { Space16 } from '@components/spaces/Space16';
import { APP_ITEMS } from '@constants/apps';
import { useSelectedItem } from './useSelectedItem';

export const Main = () => {
  const selectedPath = useSelectedItem();
  const isSelectedItem = selectedPath !== null;
  return (
    <Width>
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
    </Width>
  );
};
