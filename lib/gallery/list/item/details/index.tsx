import { Paragraphs } from '@brysonandrew/lib/gallery/list/item/details/Paragraphs';
import { TSlugProps } from '@brysonandrew/lib/gallery/config/types';
import { Tags } from './Tags';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { P2 } from '@brysonandrew/lib/components/layout/space/P2';
import { TDivMotionProps } from '@brysonandrew/lib/types/dom/motion';
import clsx from 'clsx';
import { useGallery } from '@brysonandrew/lib/gallery/context/Provider';

const Root = styled(motion.div)``;

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
    <Root
      className='column-stretch'
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      {...props}
    >
      {paragraphs && (
        <>
          <P2 />
          <hr
            className='relative -left-6 h-px dark:bg-accent bg-secondary opacity-40'
            style={{ width: `calc(100% + 3rem)` }}
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
    </Root>
  );
};
