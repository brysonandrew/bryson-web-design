import { useProjector } from '../context';
import { Button } from '../../components/Button';
import { useRef } from 'react';
import { P2 } from '@components/space/P2';

export const Stream = () => {
  const { connection, sendChannel, onLog } = useProjector();
  const chunksRef = useRef<Blob[]>([]);
  const recorderRef = useRef<MediaRecorder | null>(null);

  const handleStream = async () => {
    const stream =
      await navigator.mediaDevices.getUserMedia({
        audio: true,
        video: true,
      });

    console.log(stream);
    recorderRef.current = new MediaRecorder(stream);

    recorderRef.current.onstop = (event: Event) => {
      console.dir(event);
      onLog(
        `Recorder stopped: Recorded chunks: ${chunksRef.current.length}`,
      );
    };
    recorderRef.current.ondataavailable = async (
      event: BlobEvent,
    ) => {
      console.log('DATA');
      const blob = event.data;
      console.log(blob);
      if (blob && blob.size > 0) {
        chunksRef.current = [...chunksRef.current, blob];
        const buffer: ArrayBuffer =
          await blob.arrayBuffer();
        console.log(buffer);
        sendChannel.send(buffer);
      }
    };
    recorderRef.current.start();
  };

  const handleStop = () => recorderRef.current?.stop();

  return (
    <div className='row'>
      <Button
        // disabled={statusRecord.channelState !== 'open'}
        onClick={handleStream}
      >
        Start Stream
      </Button>
      <P2 />
      <Button
        // disabled={statusRecord.channelState !== 'open'}
        onClick={handleStop}
      >
        Stop Stream
      </Button>
    </div>
  );
};
