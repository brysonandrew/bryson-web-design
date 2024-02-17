import { TItem, TSlug } from '@app/gallery/types';
import { useApp } from '@brysonandrew/app';
import { useGallery } from '@brysonandrew/gallery';
import { TSlugProps } from '@brysonandrew/gallery/config/types';
import { motion } from 'framer-motion';
import { FC } from 'react';

type TProps = TSlugProps<TSlug>;
export const LeftHeader: FC<TProps> = ({ slug }) => {
  const { COLOR } = useApp();
  const { ITEMS_RECORD } = useGallery<TSlug, TItem>();
  const { title, description } = ITEMS_RECORD[slug];
  return (
    <motion.div
      layout
      className='relative column-start h-full lg:row'
    >
      <h4
        className='title-section'
        style={{ color: COLOR.accent }}
      >
        {title}
      </h4>
      <div className='p-1 md:p-2' />
      <h5 className='title-section italic'>
        {description}
      </h5>
    </motion.div>
  );
};
