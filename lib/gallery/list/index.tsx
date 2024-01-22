import { Item } from './item';
import { motion } from 'framer-motion';
import { useCurrProject } from '@brysonandrew/gallery/viewer/hooks/params/useCurrProject';
import { Tips } from './Tips';
import { InView } from '@brysonandrew/in-view';
import { useGallery } from '../context/GalleryProvider';

export const List = <
  T extends string,
  K extends string,
  R extends object,
>() => {
  const currProject = useCurrProject();
  const { SLUGS } = useGallery<T, K, R>();

  return (
    <>
      <Tips />
      <motion.ul className='column-stretch gap-box'>
        {SLUGS.map((slug, index) => {
          const isSelected = currProject === slug;
          if (isSelected) return null;
          return (
            <Item<T, K, R>
              key={slug}
              slug={slug}
              index={index}
            />
          );
        })}
      </motion.ul>
    </>
  );
};
