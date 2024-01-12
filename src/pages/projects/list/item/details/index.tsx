import { Paragraphs } from '@pages/projects/list/item/details/Paragraphs';
import { TItem } from '@pages/projects/config/types';
import { Tags } from './Tags';
import { FC } from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { P2 } from '@components/layout/space/P2';
import { TDivMotionProps } from '@t/dom';
import clsx from 'clsx';

const Root = styled(motion.div)``;

type TProps = TDivMotionProps & {
  isVisible: boolean;
} & Pick<TItem, 'slug' | 'paragraphs' | 'tags'>;
export const Details: FC<TProps> = ({
  isVisible,
  paragraphs,
  tags,
  slug,
  ...props
}) => {
  return (
    <Root
      className={clsx('column items-stretch rounded-md')}
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
          <Paragraphs
            key='PARAGRAPHS'
            paragraphs={paragraphs}
          />
        </>
      )}
      {tags && (
        <>
          <P2 />
          <Tags key='TAGS' slug={slug} tags={tags} />
        </>
      )}
    </Root>
  );
};
