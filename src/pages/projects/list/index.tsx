import { type FC } from 'react';
import { Item } from './item';
import { motion } from 'framer-motion';
import { PROJECT_SLUGS } from '../config/constants/items';
import { useCurrProject } from '@pages/projects/gallery/hooks/params/useCurrProject';
import { TParallaxMotionChildrenProps } from '@lib/animation/components/parallax/config';

type TProps = Partial<TParallaxMotionChildrenProps>;
export const List: FC<TProps> = ({ style, rect }) => {
  const currProject = useCurrProject();
  return (
    <motion.ul
      className='relative column-stretch w-core will-change-transform gap-3 mt-1 z-0'
      style={{
        height: rect?.height,
        ...style,
      }}
    >
      {PROJECT_SLUGS.map((slug: string, index: number) => {
        const isSelected = currProject === slug;
        if (isSelected) return null;
        return (
          <Item key={slug} slug={slug} index={index} />
        );
      })}
    </motion.ul>
  );
};
