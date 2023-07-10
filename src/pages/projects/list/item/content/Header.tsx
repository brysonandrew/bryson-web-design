import { PROJECT_ITEMS_RECORD } from '@constants/projects';
import { TSlugProps } from '@pages/projects/config';
import { HTMLMotionProps, motion } from 'framer-motion';
import { FC } from 'react';

type TProps = TSlugProps & HTMLMotionProps<'header'>;
export const Header: FC<TProps> = ({ slug, ...props }) => {
  const { title, description } = PROJECT_ITEMS_RECORD[slug];
  return (
    <motion.header
      className='relative flex items-start flex-col h-full md:flex-row md:items-center'
      {...props}
    >
      <h4 className='+text text-teal-bright'>{title}</h4>
      <div className='hidden md:flex px-2' />
      <h5 className='+text text-baby-blue italic'>
        {description}
      </h5>
    </motion.header>
  );
};
