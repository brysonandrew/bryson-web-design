import type { FC } from 'react';
import { motion } from 'framer-motion';
import { DEV_RECORD } from '@app/routes/dev/config/constants';
import { LinkList } from '@brysonandrew/routes/link-list';
import { withProviders } from '@shell/providers/withProviders';

export const List: FC = withProviders((props) => {
  return (
    <motion.div {...props}>
      <LinkList
        title='Dev Links'
        linkProps={DEV_RECORD.linkProps}
      />
    </motion.div>
  );
});
