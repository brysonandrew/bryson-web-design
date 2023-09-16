import { FC } from 'react';
import { P1 } from '@components/space/P1';
import { pascalToTitle } from '@utils/format';
import { AnimatePresence, motion } from 'framer-motion';
import { PRESENCE_OPACITY } from '@constants/animation';
import { TVariant, resolveIncludes } from './types';
import { useProjector } from '@pages/kino/context/projector';
import { TStatusRecordKey } from '@pages/kino/context/projector/types';

type TProps = { variant: TVariant };
export const Status: FC<TProps> = ({ variant }) => {
  const includes = resolveIncludes(variant);
  const { statusRecord } = useProjector();
  return (
    <AnimatePresence>
      <motion.ul key='LIST' className='column-start'>
        {includes.map((key: TStatusRecordKey) => {
          const value = statusRecord[key];
          // if (!value) return null;
          return (
            <motion.li
              key={key}
              {...PRESENCE_OPACITY}
              className='flex flex-row items-end'
            >
              <samp className='text-sm text-gray-2 uppercase'>
                {pascalToTitle(key)
                  .split(' ')
                  .slice(1)
                  .filter((v) => v !== 'State')
                  .join(' ')}
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
