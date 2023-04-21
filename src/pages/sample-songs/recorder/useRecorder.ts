import { useMothContext } from "@moth/state/Context";
import { useFileReaderResult } from "./useFileReaderResult";
import { useRef } from "react";
import { useDownload } from "./useDownload";
import { OPTIONS_WEBM } from "./constants";

export const useRecorder = () => {
  const { context, master } = useMothContext();
  const bufferRef = useRef<BlobPart[]>([]);
  const download = useDownload();
  const read = useFileReaderResult();

  const start = async () => {
    await context.audioWorklet.addModule(
      "recorder-basic.js",
    );
    const recorder = new AudioWorkletNode(
      context,
      "recorder-basic",
    );
    const source = new OscillatorNode(context, {
      frequency: 100,
    });
    source.connect(recorder);
    recorder.connect(context.destination);
    source.start(context.currentTime);

    recorder.port.onmessage = (e) => {
      bufferRef.current = [...bufferRef.current, ...e.data];
    };
  };

  const stop = () => {
    console.log("STOP");
    console.log(bufferRef.current);
    const blob = new Blob(bufferRef.current, OPTIONS_WEBM);
    download(blob);
  };

  return { start, stop };
};
