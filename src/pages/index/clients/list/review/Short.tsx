import { TEXT_SM_CLASS } from '@components/text/TextSm';
import styled from '@emotion/styled';
import { HTMLMotionProps, motion } from 'framer-motion';
import type { FC } from 'react';
import { TBaseReview, TShortReviewValue } from '../config';
import clsx from 'clsx';

const Root = styled(motion.div)``;
const Block = styled(motion.div)``;

type TProps = HTMLMotionProps<'div'> &
  TBaseReview & {
    children: TShortReviewValue;
  };
export const Short: FC<TProps> = ({
  children,
  author,
  project,
  ...props
}) => {
  return (
    <Root layout className={clsx(TEXT_SM_CLASS)} {...props}>
      <Block layout className='text-white'>{children}, </Block>
      <Block layout className='text-teal`'>
        {author}, {project}
      </Block>
    </Root>
  );
};
