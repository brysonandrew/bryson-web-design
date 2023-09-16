import { useKino } from '../../context';
import { Button } from '../../components/Button';

export const Video = () => {
  const { onUpdateActiveStream, statusRecord } = useKino();

  const initiateStream = async () => {
    const stream =
      await navigator.mediaDevices.getUserMedia({
        audio: true,
        video: true,
      });
    onUpdateActiveStream(stream);
  };

  return (
    <div>
      <Button
        disabled={
          statusRecord.remoteChannelState !== 'open'
        }
        onClick={initiateStream}
      >
        Request Stream
      </Button>
    </div>
  );
};
