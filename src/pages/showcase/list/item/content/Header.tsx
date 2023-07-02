import { TextSm } from '@components/text/TextSm';
import { APP_ITEMS_RECORD } from '@constants/apps';
import { TSlugProps } from '@pages/showcase/config';
import { HTMLMotionProps, motion } from 'framer-motion';
import { FC } from 'react';

type TProps = TSlugProps & HTMLMotionProps<'header'>;
export const Header: FC<TProps> = ({ slug, ...props }) => {
  const { title, description } = APP_ITEMS_RECORD[slug];
  return (
    <motion.header
      className='relative flex items-start flex-col sm:flex-row sm:items-center h-full pl-4'
      {...props}
    >
      <TextSm classValue='text-teal-bright'>{title}</TextSm>
      <div className='hidden sm:flex px-2' />
      <TextSm classValue='text-baby-blue italic'>
        {description}
      </TextSm>
    </motion.header>
  );
};
