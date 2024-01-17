import { Item } from './item';
import { motion } from 'framer-motion';
import { useCurrProject } from '@lib/gallery/viewer/hooks/params/useCurrProject';
import { Tips } from './Tips';
import { useGallery } from '../context/useGallery';
import { InView } from '@lib/components/layout/InView';

export const List = () => {
  const currProject = useCurrProject();
  const { SLUGS } = useGallery();
  return (
    <>
      <motion.ul className='column-stretch gap-4'>
        {SLUGS.map((slug, index) => {
          const isSelected = currProject === slug;
          if (isSelected) return null;
          return (
            <Item key={slug} slug={slug} index={index} />
          );
        })}
      </motion.ul>
      <InView>
        {({ inView }) => (inView ? <Tips /> : null)}
      </InView>
    </>
  );
};
