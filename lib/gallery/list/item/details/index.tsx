import { Paragraphs } from '@brysonandrew/gallery-list/item/details/Paragraphs';
import { TSlugProps } from '@brysonandrew/gallery/config/types';
import { Tags } from './Tags';
import { motion } from 'framer-motion';
import { P2 } from '@brysonandrew/space/P2';
import { TDivMotionProps } from '@brysonandrew/config-types/dom/motion';
import { useGallery } from '@brysonandrew/gallery/GalleryProvider';
import { useApp } from '@brysonandrew/app';

type TProps<T extends string> = TDivMotionProps & {
  isVisible: boolean;
} & TSlugProps<T>;
export const Details = <
  T extends string,
  R extends object,
>({
  isVisible,
  slug,
  ...props
}: TProps<T>) => {
  const { COLOR } = useApp();
  const { ITEMS_RECORD } = useGallery<T, R>();
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
            className='relative -left-6 border opacity-40'
            style={{
              width: `calc(100% + 3.5rem)`,
              borderColor: COLOR.accent,
            }}
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
