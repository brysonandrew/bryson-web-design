import { Paragraphs } from '@pages/projects/list/item/details/Paragraphs';
import { TItem } from '@t/projects';
import { Tech } from './Tech';
import { FC } from 'react';
import { Space3 } from '@components/spaces/Space3';
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
          <Space3 />
          <Paragraphs paragraphs={paragraphs} />
        </>
      )}
      {tags && (
        <>
          <Space3 />
          <Tech tags={tags} />
        </>
      )}
    </Root>
  );
};
