import { Button } from '../../../components/Button';
import { useProjector } from '../../context';

export const Start = () => {
  const { connection } = useProjector();
  const isDisabled = false;

  const handleStream = async () => {
    const stream: MediaStream =
      await navigator.mediaDevices.getDisplayMedia({
        audio: true,
        video: true,
      });
    stream
      .getTracks()
      .forEach((track) =>
        connection.addTrack(track, stream),
      );
  };

  return (
    <Button disabled={isDisabled} onClick={handleStream}>
      Start
    </Button>
  );
};
