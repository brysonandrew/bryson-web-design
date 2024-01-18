import { Item } from './item';
import { motion } from 'framer-motion';
import { useCurrProject } from '@brysonandrew/lib/gallery/viewer/hooks/params/useCurrProject';
import { Tips } from './Tips';
import { InView } from '@brysonandrew/lib/in-view';
import { useGallery } from '../context/Provider';

export const List = <
  T extends string,
  K extends string,
  R extends object,
>() => {
  const currProject = useCurrProject();
  const { SLUGS } = useGallery<T, K, R>();

  return (
    <>
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
      <InView>
        {({ inView }) => (inView ? <Tips /> : null)}
      </InView>
    </>
  );
};
