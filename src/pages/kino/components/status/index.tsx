import { FC } from 'react';
import { P1 } from '@components/space/P1';
import { pascalToTitle } from '@utils/format';
import { AnimatePresence, motion } from 'framer-motion';
import { PRESENCE_OPACITY } from '@constants/animation';
import { BASE_INCLUDES } from './types';
import { useProjector } from '@pages/kino/projector/context';
import { TStatusRecordKey } from '@pages/kino/config/types';

export const Status: FC = () => {
  const { statusRecord } = useProjector();
  return (
    <AnimatePresence>
      <motion.ul key='LIST' className='column-start'>
        {BASE_INCLUDES.map((key: TStatusRecordKey) => {
          const value = statusRecord[key];
          return (
            <motion.li
              key={key}
              {...PRESENCE_OPACITY}
              className='flex flex-row items-end'
            >
              <samp className='text-sm text-gray-2 uppercase'>
                {pascalToTitle(key)}
              </samp>
              <P1 />
              <kbd>{value || '—'}</kbd>
            </motion.li>
          );
        })}
      </motion.ul>
    </AnimatePresence>
  );
};
