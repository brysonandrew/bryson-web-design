import { type FC } from 'react';
import { TItem } from '@brysonandrew/gallery/config/types';
import { TagLink } from './TagLink';
import { Brighten } from '@brysonandrew/layout-effects/Brighten';
import { useApp } from '@brysonandrew/app';
import { motion } from 'framer-motion';

type TProps = Required<Pick<TItem, 'slug' | 'tags'>>;
export const Tags: FC<TProps> = ({ slug, tags }) => {
  const { BORDER_RADIUS, COLOR } = useApp();
  return (
    <motion.div className='relative'>
      <ul className='row-wrap gap-2'>
        {tags.map((item) => {
          const { title, href } = item;
          const content = (
            <Brighten>
              <span
                className='px-2 py-1 whitespace-nowrap'
                style={{
                  borderRadius: BORDER_RADIUS.SM,
                  backgroundColor: COLOR.accent,
                }}
              >
                {title}
              </span>
            </Brighten>
          );
          return (
            <li key={title} className='relative'>
              {typeof href === 'string' ? (
                <TagLink slug={slug} href={href} {...item}>
                  {content}
                </TagLink>
              ) : (
                <>{content}</>
              )}
            </li>
          );
        })}
      </ul>
    </motion.div>
  );
};
