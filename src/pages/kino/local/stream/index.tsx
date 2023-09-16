import { useProjector } from '../../context/projector';
import { Button } from '../../components/Button';

export const Stream = () => {
  const { onUpdateActiveStream, statusRecord } =
    useProjector();

  const initiateStream = async () => {
    const stream =
      await navigator.mediaDevices.getUserMedia({
        audio: true,
        video: true,
      });
    onUpdateActiveStream(stream);
  };

  return (
    <Button
      disabled={statusRecord.remoteChannelState !== 'open'}
      onClick={initiateStream}
    >
      Start Stream
    </Button>
  );
};
