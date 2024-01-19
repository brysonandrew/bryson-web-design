import { useRef } from 'react';
import { useProjector } from '../../context';

export const useRecorder = (stream: MediaStream) => {
  const { sendChannel, onLog } = useProjector();
  const chunksRef = useRef<Blob[]>([]);
  const recorderRef = useRef<MediaRecorder | null>(null);
  const handleStop = () => recorderRef.current?.stop();

  const mediaRecorder = new MediaRecorder(
    stream,
    //   ,
    // {
    //   mimeType: RECORDER_MIME,
    // }
  );
  recorderRef.current = mediaRecorder;
  recorderRef.current.onstop = (event: Event) => {
    console.dir(event);
    onLog(
      `Recorder stopped: Recorded chunks: ${chunksRef.current.length}`,
    );
  };

  recorderRef.current.ondataavailable = async (
    event: BlobEvent,
  ) => {
    const blob = event.data;
    if (blob && blob.size > 0) {
      // chunksRef.current = [...chunksRef.current, blob];
      const reader = new FileReader();
      reader.readAsArrayBuffer(blob);

      //try onload
      reader.onloadend = async () => {
        if (
          !reader.result ||
          typeof reader.result === 'string'
        )
          return null;
        const buffer: ArrayBuffer = reader.result;
        // await blob.arrayBuffer();

        if (sendChannel.readyState === 'open') {
          console.log('PROJECTING TICK', buffer);
          sendChannel.send(buffer);
        }
      };

      reader.onerror = (
        event: ProgressEvent<FileReader>,
      ) => {
        console.log(event);
      };
    }
  };
  recorderRef.current.start(200);
};
