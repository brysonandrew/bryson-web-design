import styled from '@emotion/styled';
import { useReader } from '../../context';
import { Stop } from './Stop';
import { Play } from './Play';
import { Pause } from './Pause';

const Root = styled.div``;

export const Buttons = () => {
  const {
    playModeState: [playMode, setPlaying],
  } = useReader();

  return (
    <Root className='relative row'>
      {playMode ? <Pause /> : <Play />}
      {typeof playMode === 'boolean' && <Stop />}
    </Root>
  );
};
