import type { FC } from 'react';
import {
  WORKSHOP_PATH_BASE,
  WORKSHOP_RECORD,
} from '@app/routes/workshop/config/constants';
import { LinkList } from '@brysonandrew/routes/link-list';
import { withProviders } from '@shell/providers/withProviders';
import { GlobalCss } from '@shell/global/Css';

export const List: FC = withProviders(() => {
  return (
    <GlobalCss>
      <LinkList
        title='Workshop Links'
        indexPath={WORKSHOP_PATH_BASE}
        linkProps={WORKSHOP_RECORD.linkProps}
      />
    </GlobalCss>
  );
});
