import { useProjector } from '../context';
import { Button } from '../../components/Button';

export const Stream = () => {
  const { connection, sendChannel } = useProjector();

  const initiateStream = async () => {
    const stream =
      await navigator.mediaDevices.getUserMedia({
        audio: true,
        video: true,
      });
    stream
      .getTracks()
      .forEach((track) => connection.addTrack(track, stream));
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
