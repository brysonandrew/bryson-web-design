import { TSlugProps } from '@brysonandrew/gallery/config/types';
import { motion } from 'framer-motion';
import { useGallery } from '../../GalleryProvider';

type TProps<T extends string> = TSlugProps<T>;
export const Header = <T extends string, R extends object>({
  slug,
}: TProps<T>) => {
  const { ITEMS_RECORD } = useGallery<T, R>();
  const { title, description } = ITEMS_RECORD[slug];
  return (
    <motion.div
      layout
      className='relative column-start h-full lg:row'
    >
      <h4 className='title-section title-main'>{title}</h4>
      <div className='p-1 md:p-2' />
      <h5 className='title-section italic'>
        {description}
      </h5>
    </motion.div>
  );
};
