import type { FC } from 'react';
import { motion } from 'framer-motion';
import { WORKSHOP_RECORD } from '@app/routes/workshop/config/constants';
import { LinkList } from '@brysonandrew/routes/link-list';
import { withProviders } from '@shell/providers/withProviders';

export const List: FC = withProviders((props) => {
  return (
    <motion.div {...props}>
      <LinkList
        title='Workshop Links'
        linkProps={WORKSHOP_RECORD.linkProps}
      />
    </motion.div>
  );
});
