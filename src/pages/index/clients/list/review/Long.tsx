import { TextSm } from '@components/text/TextSm';
import { MOTION_CONFIG } from '@constants/animation';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import type { FC } from 'react';
import { Fragment } from 'react';
import { TBaseReview, TLongReviewValue } from '../config';
import { DELAY_VISIBILITY } from '@pages/index/constants';

const Root = styled(motion.ul)``;

type TProps = TBaseReview & {
  children: TLongReviewValue;
};
export const Long: FC<TProps> = ({
  author,
  project,
  children,
}) => {
  return (
    <Root
      key='LONG_ROOT'
      className='relative h-full px-8 py-4 overflow-y-auto overflow-x-hidden '
      {...DELAY_VISIBILITY}
    >
      <li className='flex items-center justify-between'>
        <TextSm classValue='text-teal-bright'>
          {author} from {project} writes
        </TextSm>
      </li>
      <li className='py-1' />
      {children.map((part, index) => (
        <Fragment key={`${index}`}>
          {index !== 0 && <li className='py-1' />}
          <li>
            <TextSm classValue='text-white'>{part}</TextSm>
          </li>
        </Fragment>
      ))}
    </Root>
  );
};
