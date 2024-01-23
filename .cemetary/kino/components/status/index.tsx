import { FC } from 'react';
import { P1 } from '@brysonandrew/lib/components/layout/space/P1';
import { pascalToTitle } from '@brysonandrew/lib/utils/format';
import { AnimatePresence, motion } from 'framer-motion';
import { PRESENCE_OPACITY } from '@brysonandrew/lib/animation/constants';
import { BASE_INCLUDES } from '@brysonandrew/color/types';
import {
  TStatusRecord,
  TStatusRecordKey,
} from '@pages/_workshop/kino/config/types';

type TProps = { statusRecord: TStatusRecord };
export const Status: FC<TProps> = ({ statusRecord }) => {
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
