import styled from '@emotion/styled';
import { TitleOffset } from '@components/spaces/TitleOffset';
import { STORY } from '@constants/copy';
import { useOffSound } from '@hooks/sounds/useOffSound';
import { useOnSound } from '@hooks/sounds/useOnSound';
import { useOutsideClick } from '@hooks/useOutsideClick';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import type { FC } from 'react';
import { Fragment, useRef, useState } from 'react';
import { Title } from '../Title';
import { Item } from './Item';
import { Review } from './review';
import { REVIEWS } from './config';
import { Cross } from '@components/icons/Cross';

const Root = styled(motion.div)``;
const Button = styled(motion.button)``;

export const Clients: FC = () => {
  const [long, setLong] = useState<number | null>(null);
  const isLong = typeof long === 'number';

  const handleOnSound = useOnSound();
  const handleOffSound = useOffSound();

  const handleCloseLong = async () => {
    if (isLong) {
      handleOffSound();
      setLong(null);
    }
  };

  const handleOpen = async (next: number) => {
    setLong(next);
    handleOnSound();
  };

  const ref = useRef<HTMLDivElement | null>(null);
  useOutsideClick({ ref, handler: handleCloseLong });

  return (
    <Root className='relative flex flex-col items-center z-10'>
      <Title>{STORY.clients}</Title>
      <TitleOffset />
      <div
        ref={ref}
        className={clsx('relative w-full -translate-x-1/2')}
      >
        {isLong && (
          <>
            <Button
              className='absolute bottom-full right-2 text-white p-4 mb-6'
              initial={false}
              whileHover={{ opacity: 0.7 }}
              onTap={handleCloseLong}
            >
              <Cross classValue='w-4 h-4' />
            </Button>
            <Review
              layoutId={`${long}`}
              index={long}
              type='long'
            />
          </>
        )}
        <motion.ul className='w-full'>
          {REVIEWS.map((review, index: number) => (
            <Fragment key={review.project}>
              {index !== 0 && <div className='p-4' />}
              <Item
                isLong={isLong}
                index={index}
                onTap={() => handleOpen(index)}
              />
            </Fragment>
          ))}
        </motion.ul>
      </div>
    </Root>
  );
};
