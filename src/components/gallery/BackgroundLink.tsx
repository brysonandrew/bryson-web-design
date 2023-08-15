import styled from '@emotion/styled';
import { useTo } from '@hooks/media/nav/useTo';
import { useHoverKey } from '@hooks/cursor/useHoverKey';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { type FC } from 'react';
import { Link } from 'react-router-dom';

const Root = styled(motion(Link))``;

export const BackgroundLink: FC = () => {
  const to = useTo({});
  const { isHover, handlers } = useHoverKey(
    'gallery-background',
    'Exit image gallery',
  );

  return (
    <Root
      to={to}
      className={clsx(
        'flex absolute left-1/2 top-1/2 w-screen h-screen cursor-pointer',
      )}
      style={{ x: '-50%', y: '-50%' }}
      {...handlers}
    />
  );
};
