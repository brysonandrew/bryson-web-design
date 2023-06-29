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
import { Review } from './review/Review';
import { REVIEWS } from './config';

const Root = styled(motion.div)``;

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
        className={clsx(
          'relative w-full overflow-hidden -translate-x-1/2',
        )}
      >
        {isLong && (
          <Review
            layoutId={`${long}`}
            index={long}
            type='long'
            onClose={handleCloseLong}
          />
        )}
        <motion.ul className='w-full'>
          {REVIEWS.map((review, index: number) => (
            <Fragment key={review.project}>
              {index !== 0 && <div className='p-4' />}
              <Item
                isActive={index === long}
                isLong={isLong}
                index={index}
                onTap={() => handleOpen(index)}
              >
                {review.long}
              </Item>
            </Fragment>
          ))}
        </motion.ul>
      </div>
    </Root>
  );
};
