import { Paragraphs } from '@pages/projects/list/item/details/Paragraphs';
import { TItem } from '@t/projects';
import { Tags } from './Tags';
import { FC } from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { P2 } from '@components/space/P2';
import { TMotionDivProps } from '@t/dom';

const Root = styled(motion.div)``;

type TProps = TMotionDivProps & {
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
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      {...props}
    >
      {paragraphs && (
        <>
          <P2 />
          <hr
            className='relative -left-6 h-px bg-black-3 dark:opacity-100 opacity-10'
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
