import type { FC } from 'react';
import { DEV_PATH_BASE } from '@app/routes/dev/config/constants';
import { LinkList } from '@brysonandrew/routes/link-list';
import { withProviders } from '@shell/providers/withProviders';
import { GlobalCss } from '@shell/global/Css';
import { DEV_RECORD } from '@app/routes/dev';

export const List: FC = withProviders(() => {
  return (
    <GlobalCss>
      <LinkList
        title='Dev Links'
        indexPath={DEV_PATH_BASE}
        linkProps={DEV_RECORD.menuItems}
      />
    </GlobalCss>
  );
});
