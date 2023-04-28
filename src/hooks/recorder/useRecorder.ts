import { useMothContext } from "@moth/state/Context";
import { useRef } from "react";
import { useDownload } from "./useDownload";

export const useRecorder = () => {
  const { context, master } = useMothContext();
  const bufferRef = useRef<Float32Array>(
    new Float32Array(),
  );
  const download = useDownload();

  const start = async () => {
    await context.audioWorklet.addModule(
      "recorder-basic.js",
    );
    const recorder = new AudioWorkletNode(
      context,
      "recorder-basic",
    );
    // const source = new OscillatorNode(context, {
    //   frequency: 100,
    // });
    // source.connect(recorder);
    // recorder.connect(context.destination);
    // source.start(context.currentTime);

    master.connect(recorder);

    recorder.port.onmessage = (e) => {
      const curr = bufferRef.current;
      const next = e.data;

      bufferRef.current = new Float32Array(
        curr.length + next.length,
      );

      bufferRef.current.set(curr);
      bufferRef.current.set(next, curr.length);
    };
  };

  const stop = () => {
    const blob = new Blob([bufferRef.current as BlobPart]);
    download(blob);
  };

  return { start, stop };
};
