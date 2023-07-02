import type { FC } from 'react';
import { FillDarkest } from '@components/metal/FillDarkest';
import styled from '@emotion/styled';
import { useMoveSound } from '@hooks/sounds/useMoveSound';
import {
  resolveDropShadow,
  resolveTextShadow,
} from '@pages/index/constants';
import { IMG_KEY } from '@pages/showcase/config';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import {
  Link as _Link,
  useSearchParams,
} from 'react-router-dom';

export const Root = styled(motion.div)``;
export const Link = styled(motion(_Link))``;

export const Background = styled(motion.div)``;

export type TProps = {
  name: string;
  to: string;
  itemWidth: number;
};
export const Button: FC<TProps> = ({
  itemWidth,
  name,
  to,
}) => {
  const [searchParams] = useSearchParams();
  const imgParam = searchParams.get(IMG_KEY);
  const isActive = imgParam === to.split(`${IMG_KEY}=`)[1];
  const animation = isActive ? 'active' : 'idle';
  const handleMoveSound = useMoveSound();
  const handleClick = () => {
    handleMoveSound();
  };
  return (
    <Root
      initial='idle'
      animate={animation}
      style={{
        width: itemWidth,
      }}
      whileHover={isActive ? 'active' : 'hover'}
      className='relative m-0.25'
      variants={{
        active: { cursor: 'default', zIndex: 99 },
      }}
    >
      <Link
        to={to}
        onClick={handleClick}
        className={clsx(
          'relative flex items-center pl-2 pt-1 pb-1 h-full m-0.5 shadow-teal-02-sm z-10',
        )}
        style={{ cursor: isActive ? 'default' : 'pointer' }}
        variants={{
          idle: {
            opacity: 0.5,
            textShadow: resolveTextShadow(0),
            filter: resolveDropShadow(0),
            zIndex: 0,
          },
          active: {
            opacity: 1,
            textShadow: resolveTextShadow(2),
            filter: resolveDropShadow(1),
            zIndex: 9999,
          },
          hover: {
            opacity: 1,
            textShadow: resolveTextShadow(4, 'teal'),
            filter: resolveDropShadow(8, 'teal'),
            zIndex: 1,
          },
        }}
      >
        {isActive && (
          <FillDarkest
            initial={false}
            layoutId='GALLERY_BUTTON_FILL'
          />
        )}
        <motion.span className='relative uppercase text-teal-bright text-xs'>
          {name.replace(/x/, '')}
        </motion.span>
      </Link>
    </Root>
  );
};
