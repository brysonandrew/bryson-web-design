import { TextSm } from '@components/text/TextSm';
import type { FC } from 'react';
import { Fragment } from 'react';
import styled from '@emotion/styled';
import type { HTMLMotionProps } from 'framer-motion';
import { motion } from 'framer-motion';
import { MOTION_CONFIG } from '@constants/animation';
import { TBaseReview, TLongReviewValue } from '../config';

const Root = styled(motion.div)``;

type TProps = HTMLMotionProps<'div'> &
  TBaseReview & {
    children: TLongReviewValue;
  };
export const Long: FC<TProps> = ({
  author,
  project,
  children,
  ...props
}) => {
  return (
    <Root
      className='absolute left-2 -top-4 right-2 -bottom-4 bg-black-dark px-8 py-4 overflow-y-auto overflow-x-hidden shadow-green-04-sm z-10'
      {...props}
    >
      <motion.ul
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          ...MOTION_CONFIG,
          delay: MOTION_CONFIG.transition.duration,
        }}
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
              <TextSm classValue='text-white'>
                {part}
              </TextSm>
            </li>
          </Fragment>
        ))}
      </motion.ul>
    </Root>
  );
};
