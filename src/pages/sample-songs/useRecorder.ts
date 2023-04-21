import { useMothContext } from "@moth/state/Context";
import { OPTIONS_OGG } from "./constants";
import { useFileReaderResult } from "./useFileReaderResult";

export const useRecorder = () => {
  const { context, master } = useMothContext();

  const read = useFileReaderResult();

  const handler = async () => {
    const ab = new ArrayBuffer(1000);
    read(ab);
    await context.audioWorklet.addModule("recorder.js");
    const recorder = new AudioWorkletNode(
      context,
      "recorder",
    );
    master.connect(recorder);
    recorder.port.onmessage = (e) => {
      if (e.data.eventType === "data") {
        const audioData = e.data.audioBuffer;
        const blob = new Blob(audioData, OPTIONS_OGG);
        const fileReader = new FileReader();
        fileReader.onloadend = async () => {
          read(fileReader.result);
        };
        fileReader.readAsArrayBuffer(blob);
      }

      if (e.data.eventType === "stop") {
        console.log("STOPPED");
      }
    };

    const startRecordingTime = context.currentTime;
    recorder.parameters
      .get("isRecording")
      .setValueAtTime(1, startRecordingTime);
    recorder.parameters
      .get("isRecording")
      .setValueAtTime(0, startRecordingTime + 2);
    // yourSourceNode.start(time);
    //setPlay(name);
  };

  return handler;
};
