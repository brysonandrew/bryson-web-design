import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import type { FC } from 'react';
import { Link as __Link } from 'react-router-dom';
import { Title } from './Title';
import { useMoveSound } from '@brysonandrew/sounds/useMoveSound';
import { useHoverKey } from '@brysonandrew/cursor/hooks/useHoverKey';
import { BIG_CURSOR_KEY } from '@brysonandrew/cursor/switch/config';
import { resolveInteractiveLabels } from '@brysonandrew/utils';
import { APP_DESCRIPTION } from '@app/base/constants';
import { PAGE_RECORD } from '@app/routes/constants/pages';

const _Link = styled(motion(__Link))``;

export const Link: FC = () => {
  const { handlers } = useHoverKey(BIG_CURSOR_KEY, 'home');

  const moveSound = useMoveSound();
  const handleClick = () => {
    moveSound();
  };

  return (
    <_Link
      className='relative left-0 cursor-pointer'
      to={PAGE_RECORD.index.path}
      onClick={handleClick}
      whileHover='hover'
      {...resolveInteractiveLabels(APP_DESCRIPTION)}
      {...handlers}
    >
      <Title />
    </_Link>
  );
};
