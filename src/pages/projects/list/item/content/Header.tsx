import { TextSm } from '@components/text/TextSm';
import { APP_ITEMS_RECORD } from '@constants/apps';
import { TSlugProps } from '@pages/projects/config';
import { HTMLMotionProps, motion } from 'framer-motion';
import { FC } from 'react';

type TProps = TSlugProps & HTMLMotionProps<'header'>;
export const Header: FC<TProps> = ({ slug, ...props }) => {
  const { title, description } = APP_ITEMS_RECORD[slug];
  return (
    <motion.header
      className='relative flex items-start flex-col h-full md:flex-row md:items-center'
      {...props}
    >
      <TextSm classValue='text-teal-bright'>{title}</TextSm>
      <div className='hidden md:flex px-2' />
      <TextSm classValue='text-baby-blue italic'>
        {description}
      </TextSm>
    </motion.header>
  );
}; 
