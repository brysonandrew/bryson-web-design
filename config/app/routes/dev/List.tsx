import type { FC } from 'react';
import {
  DEV_PATH_BASE,
  DEV_RECORD,
} from '@app/routes/dev/config/constants';
import { LinkList } from '@brysonandrew/routes/link-list';
import { withProviders } from '@shell/providers/withProviders';
import { GlobalCss } from '@shell/global/Css';

export const List: FC = withProviders((props) => {
  return (
    <GlobalCss>
      <LinkList
        title='Dev Links'
        indexPath={DEV_PATH_BASE}
        linkProps={DEV_RECORD.linkProps}
      />
    </GlobalCss>
  );
});
