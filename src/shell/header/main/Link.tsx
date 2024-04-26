import type { FC } from 'react';
import { Link as _Link } from 'react-router-dom';
import { Title } from './Title';
import { useMoveSound } from '@brysonandrew/sounds/useMoveSound';
import { useHoverKey } from '@brysonandrew/motion-cursor/hooks/useHoverKey';
import { BIG_CURSOR_KEY } from '@brysonandrew/motion-cursor/config/constants';
import { resolveInteractiveLabels } from '@brysonandrew/utils-attributes';
import { APP_DESCRIPTION } from '@app/base/package';
import { PAGE_RECORDS } from '@app/routes';

export const Link: FC = () => {
  const { handlers } = useHoverKey(BIG_CURSOR_KEY, 'home');

  const moveSound = useMoveSound();
  const handleClick = () => {
    moveSound();
  };

  return (
    <_Link
      className='relative left-0 cursor-pointer'
      to={PAGE_RECORDS.record.index.path}
      onClick={handleClick}
      {...resolveInteractiveLabels(APP_DESCRIPTION)}
      {...handlers}
    >
      <Title />
    </_Link>
  );
};
