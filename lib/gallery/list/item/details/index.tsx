import { Paragraphs } from '@brysonandrew/gallery/list/item/details/Paragraphs';
import { TSlugProps } from '@brysonandrew/gallery/config/types';
import { Tags } from './Tags';
import { motion } from 'framer-motion';
import { P2 } from '@brysonandrew/space/P2';
import { TDivMotionProps } from '@brysonandrew/config-types/dom/motion';
import { useGallery } from '@brysonandrew/gallery/GalleryProvider';

type TProps<K extends string> = TDivMotionProps & {
  isVisible: boolean;
} & TSlugProps<K>;
export const Details = <
  T extends string,
  K extends string,
  R extends object,
>({
  isVisible,
  slug,
  ...props
}: TProps<K>) => {
  const { ITEMS_RECORD } = useGallery<T, K, R>();
  const { paragraphs, tags } = ITEMS_RECORD[slug];

  return (
    <motion.div
      className='column-stretch'
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      {...props}
    >
      {paragraphs && (
        <>
          <hr
            className='relative -left-6 border dark:border-accent border-accent opacity-40'
            style={{ width: `calc(100% + 3.5rem)` }}
          />
          <P2 />
          <Paragraphs paragraphs={paragraphs} />
        </>
      )}
      {tags && (
        <>
          <P2 />
          <Tags slug={slug} tags={tags} />
        </>
      )}
      <P2 />
    </motion.div>
  );
};
