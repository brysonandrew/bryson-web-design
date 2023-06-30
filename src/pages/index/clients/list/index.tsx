import styled from '@emotion/styled';
import { useOffSound } from '@hooks/sounds/useOffSound';
import { useOnSound } from '@hooks/sounds/useOnSound';
import { useOutsideClick } from '@hooks/useOutsideClick';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import type { FC } from 'react';
import { Fragment, useRef, useState } from 'react';
import { Item } from './Item';
import { Review } from './review';
import { REVIEWS } from './config';
import { Cross } from '@components/icons/Cross';
import { TChildrenProps } from '@components/fake-3d/Motion';
import { Fill } from '@components/metal/Fill';

const Root = styled(motion.div)``;
const Button = styled(motion.button)``;

type TProps = Partial<TChildrenProps>;
export const List: FC<TProps> = ({
  y,
  rotateX,
  filter,
}) => {
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
    <Root
      ref={ref}
      className={clsx(
        'relative w-full -translate-x-1/2 preserve-3d',
      )}
      style={{ rotateX, y, filter }}
    >
      {isLong && (
        <Button
          className='absolute bottom-full right-2 text-white p-4 mb-6'
          initial={false}
          whileHover={{ opacity: 0.7 }}
          onTap={handleCloseLong}
        >
          <Cross classValue='w-4 h-4 stroke-baby-blue' />
        </Button>
      )}
      <motion.ul className='relative w-full'>
        {REVIEWS.map((review, index: number) => (
          <Fragment key={review.project}>
            <>
              {index === long ? (
                <motion.li
                  className={clsx(
                    'absolute left-0 top-0 right-0 bottom-0 shadow-baby-blue-04-sm z-20',
                  )}
                  layoutId={`${long}`}
                >
                  <Fill />
                  <Review index={long} type='long' />
                </motion.li>
              ) : (
                <>
                  {!isLong && index !== 0 && (
                    <motion.li layout className='p-4' />
                  )}
                  <Item
                    layoutId={`${index}`}
                    isLong={isLong}
                    index={index}
                    onTap={() => handleOpen(index)}
                  />
                </>
              )}
            </>
          </Fragment>
        ))}
      </motion.ul>
    </Root>
  );
};
