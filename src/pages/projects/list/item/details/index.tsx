import { Paragraphs } from '@pages/projects/list/item/details/Paragraphs';
import { TItem } from '@t/projects';
import { Tags } from './Tags';
import { FC } from 'react';
import { Space3 } from '@components/spaces/Space3';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { Space2 } from '@components/spaces/Space2';
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
          <Space3 />
          <Paragraphs
            key='PARAGRAPHS'
            paragraphs={paragraphs}
          />
        </>
      )}
      {tags && (
        <>
          <Space2 />
          <Tags key='TAGS' slug={slug} tags={tags} />
        </>
      )}
    </Root>
  );
};
