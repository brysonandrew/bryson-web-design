import { FC } from 'react';
import { TStatusRecordKey } from '../../context/types';
import { useKino } from '../../context';
import { P1 } from '@components/space/P1';
import { pascalToTitle } from '@utils/format';
import { AnimatePresence, motion } from 'framer-motion';
import { PRESENCE_OPACITY } from '@constants/animation';
import { TVariant, resolveIncludes } from './types';

type TProps = { variant: TVariant };
export const Status: FC<TProps> = ({ variant }) => {
  const includes = resolveIncludes(variant);
  const { statusRecord } = useKino();
  return (
    <AnimatePresence>
      <motion.ul key='LIST' className='column-start'>
        {includes.map((key: TStatusRecordKey) => {
          const value = statusRecord[key];
          if (!value) return null;
          return (
            <motion.li
              key={key}
              {...PRESENCE_OPACITY}
              className='flex flex-row'
            >
              <samp className='text-gray-3'>
                {pascalToTitle(key)
                  .split(' ')
                  .slice(1)
                  .filter((v) => v !== 'State')
                  .join(' ')}
              </samp>
              <P1 />
              <kbd>{value}</kbd>
            </motion.li>
          );
        })}
      </motion.ul>
    </AnimatePresence>
  );
};
