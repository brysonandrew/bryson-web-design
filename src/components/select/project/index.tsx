import { Paragraphs } from '@components/select/project/Paragraphs';
import { TItem } from '@t/projects';
import { Box } from '../Box';
import { Tech } from './Tech';
import { FC } from 'react';
import { Space } from '@components/spaces/Space';

type TProps = TItem;
export const Project: FC<TProps> = ({
  paragraphs,
  tags,
}) => {
  return (
    <>
      <Box exitDelay={0.14}>
        {paragraphs && (
          <Paragraphs paragraphs={paragraphs} />
        )}
      </Box>
      {tags && (
        <>
          <Space />
          <Box delay={0.14}>
            <Tech tags={tags} />
          </Box>
        </>
      )}
    </>
  );
};
