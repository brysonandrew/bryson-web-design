import { Paragraphs } from '@pages/projects/list/item/details/Paragraphs';
import { TItem } from '@pages/projects/config/types';
import { Tags } from './Tags';
import { FC } from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { P2 } from '@lib/components/layout/space/P2';
import { TDivMotionProps } from '@lib/types/dom';
import clsx from 'clsx';
import { PROJECT_ITEMS_RECORD } from '@pages/projects/config/constants/items';

const Root = styled(motion.div)``;

type TProps = TDivMotionProps & {
  isVisible: boolean;
} & Pick<TItem, 'slug'>;
export const Details: FC<TProps> = ({
  isVisible,
  slug,
  ...props
}) => {
  const { paragraphs, tags } = PROJECT_ITEMS_RECORD[slug];

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
