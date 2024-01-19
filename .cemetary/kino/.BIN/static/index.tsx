import { useRef } from 'react';
import { useProjector } from '../../../projector/context';
import { Button } from '../../Button';
import { P2 } from '@components/space/P2';

export const Static = () => {
  const { sendChannel, onLog } = useProjector();
  const xhrRef = useRef<XMLHttpRequest | null>(null);

  const handlePlay = async () => {
    onLog('fetching...');
    xhrRef.current = new XMLHttpRequest();
    xhrRef.current.open('get', '/sample.mp4');
    xhrRef.current.responseType = 'arraybuffer';
    xhrRef.current.onload = () => {
      if (sendChannel.readyState === 'open') {
        const buffer = xhrRef.current?.response;
        console.log('PROJECTING TICK', buffer);
        sendChannel.send(buffer);
      }
    };
    xhrRef.current.send();
  };

  const handleStop = () => xhrRef.current?.abort();

  return (
    <div className='row'>
      <Button
        // disabled={statusRecord.channelState !== 'open'}
        onClick={handlePlay}
      >
        Start Static
      </Button>
      <P2 />
      <Button
        // disabled={statusRecord.channelState !== 'open'}
        onClick={handleStop}
      >
        Stop Static
      </Button>
    </div>
  );
};
