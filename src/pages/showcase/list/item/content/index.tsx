import { TextSm } from '@components/text/TextSm';
import type { FC } from 'react';
import { Time } from './Time';
import type { TItem } from '@t/showcase';
import { motion } from 'framer-motion';

type TProps = Pick<TItem, 'title' | 'time' | 'description'>;
export const Content: FC<TProps> = ({
  title,
  time,
  description,
}) => (
  <>
    <motion.div
      className='flex flex-col -mt-0.5 pl-4 lg:flex-row lg:items-end'
      layout
    >
      <TextSm classValue='text-teal-bright'>{title}</TextSm>
      <div className='hidden lg:flex px-2' />
      <TextSm
        classValue='text-baby-blue text-md italic'
        layout
      >
        {description}
      </TextSm>
    </motion.div>
    <motion.div className='px-4' layout>
      <Time time={time} />
    </motion.div>
  </>
);
