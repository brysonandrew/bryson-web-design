import { TextSm } from '@components/text/TextSm';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import type { FC } from 'react';
import {
  TBaseReview,
  TShortReviewValue,
} from '../config';
const Block = styled(motion.div)``;

type TProps = TBaseReview & {
  children: TShortReviewValue;
};
export const Short: FC<TProps> = ({
  children,
  author,
  project,
}) => {
  return (
    <TextSm>
      <Block className='text-white'>{children}, </Block>
      <Block className='text-teal`'>
        {author}, {project}
      </Block>
    </TextSm>
  );
};
