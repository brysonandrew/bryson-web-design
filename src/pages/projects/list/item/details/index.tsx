import { Paragraphs } from '@pages/projects/list/item/details/Paragraphs';
import { TItem } from '@t/projects';
import { Tech } from './Tech';
import { FC } from 'react';
import { Space3 } from '@components/spaces/Space3';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { Space2 } from '@components/spaces/Space2';
import { TMotionDivProps } from '@t/dom';

const Root = styled(motion.div)``;

type TProps = TMotionDivProps & {
  isVisible: boolean;
} & Pick<TItem, 'paragraphs' | 'tags'>;
export const Details: FC<TProps> = ({
  isVisible,
  paragraphs,
  tags,
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
          <Tech key='TECH' tags={tags} />
        </>
      )}
    </Root>
  );
};
