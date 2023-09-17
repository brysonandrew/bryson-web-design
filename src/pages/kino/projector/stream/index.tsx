import { useProjector } from '../context';
import { Button } from '../../components/Button';

export const Stream = () => {
  const { statusRecord } =
    useProjector();

  const initiateStream = async () => {
    const stream =
      await navigator.mediaDevices.getUserMedia({
        audio: true,
        video: true,
      });
      
  };

  return (
    <Button
      // disabled={statusRecord.channelState !== 'open'}
      onClick={initiateStream}
    >
      Start Stream
    </Button>
  );
};
