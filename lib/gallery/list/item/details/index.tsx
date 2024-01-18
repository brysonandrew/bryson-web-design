import { Paragraphs } from 'lib/gallery/list/item/details/Paragraphs';
import { TItem } from 'lib/gallery/config/types';
import { Tags } from './Tags';
import { FC } from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { P2 } from 'lib/components/layout/space/P2';
import { TDivMotionProps } from 'lib/types/dom/motion';
import clsx from 'clsx';
import { useGallery } from 'lib/gallery/context/useGallery';

const Root = styled(motion.div)``;

type TProps = TDivMotionProps & {
  isVisible: boolean;
} & Pick<TItem, 'slug'>;
export const Details: FC<TProps> = ({
  isVisible,
  slug,
  ...props
}) => {
  const { ITEMS_RECORD } = useGallery();
  const { paragraphs, tags } = ITEMS_RECORD[slug];

  return (
    <Root
      className={clsx('column-stretch')}
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
