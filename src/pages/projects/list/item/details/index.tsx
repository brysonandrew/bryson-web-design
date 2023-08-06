import { Paragraphs } from '@pages/projects/list/item/details/Paragraphs';
import { TItem } from '@t/projects';
import { Tech } from './Tech';
import { FC } from 'react';
import { Space } from '@components/spaces/Space';
import { Space2 } from '@components/spaces/Space2';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { DELAY_VISIBILITY } from '@constants/animation';

const Root = styled(motion.div)``;

type TProps = Pick<TItem, 'paragraphs' | 'tags'>;
export const Details: FC<TProps> = ({
  paragraphs,
  tags,
}) => {
  return (
    <Root {...DELAY_VISIBILITY}>
      {paragraphs && (
        <>
          <Space2 />
          <Paragraphs paragraphs={paragraphs} />
        </>
      )}
      {tags && (
        <>
          <Space2 />
          <Tech tags={tags} />
        </>
      )}
    </Root>
  );
};
