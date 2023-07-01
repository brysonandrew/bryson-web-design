import { TextSm } from '@components/text/TextSm';
import { APP_ITEMS_RECORD } from '@constants/apps';
import { TSlugProps } from '@pages/showcase/config';
import { HTMLMotionProps, motion } from 'framer-motion';
import { FC } from 'react';
import { Mark } from './Mark';

type TProps = TSlugProps & HTMLMotionProps<'header'>;
export const Header: FC<TProps> = ({ slug, ...props }) => {
  const { title, description } = APP_ITEMS_RECORD[slug];
  return (
    <motion.header
      className='relative flex items-start flex-col lg:flex-row lg:items-center h-full pl-4'
      {...props}
    >
      <Mark />
      <div className='p-2' />
      <TextSm classValue='text-teal-bright'>{title}</TextSm>
      <div className='hidden lg:flex px-2' />
      <TextSm classValue='text-baby-blue text-md italic'>
        {description}
      </TextSm>
    </motion.header>
  );
};
