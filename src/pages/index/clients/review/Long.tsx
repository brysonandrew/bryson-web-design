import { TextSm } from '@components/text/TextSm';
import type { FC } from 'react';
import { Fragment } from 'react';
import styled from '@emotion/styled';
import type { HTMLMotionProps } from 'framer-motion';
import { motion } from 'framer-motion';
import { MOTION_CONFIG } from '@constants/animation';
import { Cross } from '@components/icons/Cross';
import {
  TBaseReview,
  TLongReviewValue,
} from '../config';

const Root = styled(motion.div)``;
const Button = styled(motion.button)``;

type TProps = HTMLMotionProps<'div'> &
  TBaseReview & {
    onClose?(): void;
    children: TLongReviewValue;
  };
export const Long: FC<TProps> = ({
  author,
  project,
  onClose,
  children,
  ...props
}) => {
  return (
    <Root
      className='absolute inset-0 left-2 bg-black-dark p-4 overflow-y-auto overflow-x-hidden z-10'
      {...props}
    >
      <motion.ul
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          ...MOTION_CONFIG,
          delay: MOTION_CONFIG.transition.duration,
        }}
      >
        <li className='flex items-center justify-between'>
          <TextSm classValue='text-teal-bright'>
            {author} from {project} writes
          </TextSm>
          {onClose ? (
            <Button
              className='text-white p-4'
              initial={false}
              whileHover={{ opacity: 0.7 }}
              onTap={onClose}
            >
              <Cross />
            </Button>
          ) : (
            <div />
          )}
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
