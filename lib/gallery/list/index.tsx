import { Item } from './item';
import { motion } from 'framer-motion';
import { useCurrProject } from '@brysonandrew/gallery-viewer/hooks/params/useCurrProject';
import { Tips } from './Tips';
import { useGallery } from '../GalleryProvider';

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

export * from './Tips';
export * from './item';
export * from './item/resolveHoverKeyArgs';
export * from './item/details/Buttons';
export * from './item/details/Paragraphs';
export * from './item/details/TagLink';
export * from './item/details/Tags';
export * from './item/details';